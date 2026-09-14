import { useState, useEffect, useRef } from 'react';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [activePopover, setActivePopover] = useState(null); // { x, y, text, editId }
  const [popoverText, setPopoverText] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [docHeight, setDocHeight] = useState(0);
  const [lastCleared, setLastCleared] = useState([]);

  const textareaRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (msg, duration = 3000) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const updateDocHeight = () => {
    const h = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
    setDocHeight(h);
  };

  // 1. URL Re-hydration on initial load (?fb=...)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbData = urlParams.get('fb');
    if (fbData) {
      try {
        const parsed = JSON.parse(decodeURIComponent(atob(fbData)));
        if (Array.isArray(parsed) && parsed.length > 0) {
          const loadedComments = parsed.map((item, idx) => ({
            id: 'fb-' + Date.now() + '-' + idx,
            x: item.x,
            y: item.y,
            text: item.t,
          }));
          setComments(loadedComments);
          setIsOpen(true);
          showToast('📌 Loaded client feedback comments');

          // Clean URL so refresh doesn't duplicate query
          const cleanUrl = new URL(window.location.href);
          cleanUrl.searchParams.delete('fb');
          window.history.replaceState({}, document.title, cleanUrl.toString());
        }
      } catch (e) {
        console.error('Failed to parse feedback data from URL:', e);
      }
    }
  }, []);

  // 2. Track document height when open
  useEffect(() => {
    if (isOpen) {
      updateDocHeight();
      window.addEventListener('resize', updateDocHeight);
      window.addEventListener('scroll', updateDocHeight);
      return () => {
        window.removeEventListener('resize', updateDocHeight);
        window.removeEventListener('scroll', updateDocHeight);
      };
    }
  }, [isOpen]);

  // Focus textarea when popover opens
  useEffect(() => {
    if (activePopover && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [activePopover]);

  const handleStartFeedback = () => {
    updateDocHeight();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActivePopover(null);
  };

  const handleClearAll = () => {
    if (comments.length === 0) return;
    setLastCleared(comments);
    setComments([]);
    setActivePopover(null);
  };

  const handleUndoClear = () => {
    if (lastCleared.length > 0) {
      setComments(lastCleared);
      setLastCleared([]);
    }
  };

  const handleLayerClick = (e) => {
    // Only trigger if clicking directly on interaction layer, not on stamps or popover
    if (e.target.id === 'fb-interaction-layer') {
      const pageX = e.pageX;
      const pageY = e.pageY;
      setActivePopover({ x: pageX, y: pageY, editId: null });
      setPopoverText('');
    }
  };

  const handleStampClick = (e, comment) => {
    e.stopPropagation();
    setActivePopover({
      x: comment.x,
      y: comment.y,
      editId: comment.id,
    });
    setPopoverText(comment.text);
  };

  const handleConfirmComment = () => {
    const trimmed = popoverText.trim();
    if (!trimmed) {
      // If editing existing and emptied, remove it
      if (activePopover.editId) {
        setComments((prev) => prev.filter((c) => c.id !== activePopover.editId));
      }
    } else {
      if (activePopover.editId) {
        // Update existing
        setComments((prev) =>
          prev.map((c) =>
            c.id === activePopover.editId ? { ...c, text: trimmed } : c
          )
        );
      } else {
        // Add new
        setComments((prev) => [
          ...prev,
          {
            id: 'fb-' + Date.now(),
            x: activePopover.x,
            y: activePopover.y,
            text: trimmed,
          },
        ]);
      }
    }
    setActivePopover(null);
    setPopoverText('');
  };

  const handleDeleteActiveComment = () => {
    if (activePopover.editId) {
      setComments((prev) => prev.filter((c) => c.id !== activePopover.editId));
    }
    setActivePopover(null);
    setPopoverText('');
  };

  const handleSendFeedback = () => {
    if (comments.length === 0) {
      showToast('⚠️ Please click on the page to leave at least one comment first.');
      return;
    }

    const data = comments.map((c) => ({
      x: Math.round(c.x),
      y: Math.round(c.y),
      t: c.text,
    }));

    const base64Data = btoa(encodeURIComponent(JSON.stringify(data)));
    const url = new URL(window.location.href);
    url.searchParams.set('fb', base64Data);

    showToast('✉️ Sending feedback to Iryna...');
    setIsSending(true);

    fetch('https://formsubmit.co/ajax/iryna.herts@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: 'New Website Feedback Received',
        message:
          'A client just left comments on the website preview link.\n\nClick the link below to view their exact comments:',
        feedback_link: url.toString(),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSending(false);
        showToast('✅ Feedback Sent Successfully!');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url.toString());
        }
      })
      .catch((err) => {
        console.error('Error sending feedback:', err);
        setIsSending(false);
        showToast('❌ Error sending email. Link copied to clipboard instead.');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url.toString());
        }
      });
  };

  return (
    <>
      {/* 1. FLOATING RED PENCIL TRIGGER BUTTON */}
      {!isOpen && (
        <button
          id="fb-trigger-btn"
          onClick={handleStartFeedback}
          title="Leave Feedback"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999,
            background: '#ffffff',
            color: '#ef4444',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.borderColor = '#ef4444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </button>
      )}

      {/* 2. FLOATING TOOLBAR CARD (Positioned non-sticky under header to the right) */}
      {isOpen && (
        <div
          id="fb-header-toolbar"
          className="fb-header-toolbar"
          style={{
            position: 'absolute',
            top: '120px',
            right: '24px',
            height: '52px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '0 16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            zIndex: 100005,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              type="button"
              className="fb-tool-btn"
              onClick={handleClearAll}
              style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                borderRadius: '6px',
                padding: '5px 12px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
            >
              🗑️ Clear All Comments
            </button>
            {lastCleared && lastCleared.length > 0 && (
              <button
                type="button"
                className="fb-tool-btn"
                onClick={handleUndoClear}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ef4444',
                  color: '#ef4444',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease',
                }}
              >
                ↩️ Undo
              </button>
            )}
          </div>

          <span
            style={{
              width: '1px',
              height: '20px',
              background: '#e2e8f0',
              margin: '0 4px',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="fb-tool-btn fb-btn-export"
              onClick={handleSendFeedback}
              disabled={isSending}
              style={{
                background: '#ffffff',
                border: '1px solid #16a34a',
                color: '#16a34a',
                fontWeight: 600,
                borderRadius: '6px',
                padding: '5px 17px',
                fontSize: '13px',
                cursor: isSending ? 'wait' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSending) {
                  e.currentTarget.style.background = '#f0fdf4';
                  e.currentTarget.style.borderColor = '#15803d';
                  e.currentTarget.style.color = '#15803d';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSending) {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#16a34a';
                  e.currentTarget.style.color = '#16a34a';
                }
              }}
            >
              {isSending ? 'Sending...' : 'Email Comments to Iryna 🔗'}
            </button>
            <button
              type="button"
              onClick={handleClose}
              title="Close"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                fontSize: '18px',
                padding: '4px 8px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.color = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 3. INTERACTION OVERLAY LAYER */}
      {isOpen && (
        <div
          id="fb-interaction-layer"
          onClick={handleLayerClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: docHeight > 0 ? `${docHeight}px` : '100%',
            zIndex: 99990,
            pointerEvents: 'auto',
            cursor:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 2v20M2 12h20' stroke='%23ef4444' stroke-width='2'/></svg>\") 12 12, crosshair",
          }}
        >
          {/* Stamped Comments */}
          {comments.map((comment) => {
            const isBeingEdited =
              activePopover && activePopover.editId === comment.id;
            if (isBeingEdited) return null; // Hide while editing in popover

            return (
              <div
                key={comment.id}
                className="fb-stamp"
                onClick={(e) => handleStampClick(e, comment)}
                title="Click to edit or delete comment"
                style={{
                  position: 'absolute',
                  left: `${comment.x}px`,
                  top: `${comment.y}px`,
                  background: 'rgba(255, 255, 255, 0.96)',
                  border: '2px dashed #ef4444',
                  padding: '8px 12px',
                  color: '#ef4444',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '1.4',
                  whiteSpace: 'pre-wrap',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                  borderRadius: '6px',
                  zIndex: 99991,
                  cursor: 'pointer',
                  maxWidth: '320px',
                  wordWrap: 'break-word',
                  transform: 'translate(-4px, -4px)',
                }}
              >
                {comment.text}
              </div>
            );
          })}

          {/* Comment Edit / Creation Popover */}
          {activePopover && (
            <div
              className="fb-text-popover"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                left: `${activePopover.x}px`,
                top: `${activePopover.y}px`,
                zIndex: 100010,
                background: '#ffffff',
                border: '2px dashed #ef4444',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                minWidth: '220px',
                maxWidth: '320px',
                transform: 'translate(-4px, -4px)',
              }}
            >
              <textarea
                ref={textareaRef}
                placeholder="Type red comment here..."
                value={popoverText}
                onChange={(e) => setPopoverText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    handleConfirmComment();
                  } else if (e.key === 'Escape') {
                    setActivePopover(null);
                  }
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ef4444',
                  background: 'transparent',
                  minHeight: '54px',
                  width: '100%',
                }}
              />
              <div
                className="fb-text-controls"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  gap: '6px',
                }}
              >
                <button
                  type="button"
                  onClick={handleDeleteActiveComment}
                  title="Delete comment"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '14px',
                    background: '#fef2f2',
                    color: '#ef4444',
                  }}
                >
                  🗑️
                </button>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setActivePopover(null)}
                    title="Cancel"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      background: '#f3f4f6',
                      color: '#4b5563',
                    }}
                  >
                    ✕
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmComment}
                    title="Save comment"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      background: '#22c55e',
                      color: '#ffffff',
                    }}
                  >
                    ✓
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. TOAST NOTIFICATION */}
      {toastMessage && (
        <div
          className="fb-toast"
          style={{
            position: 'absolute',
            top: '180px',
            right: '24px',
            background: '#ffffff',
            color: '#334155',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            border: '1px solid #e2e8f0',
            zIndex: 100020,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {toastMessage}
        </div>
      )}
    </>
  );
}
