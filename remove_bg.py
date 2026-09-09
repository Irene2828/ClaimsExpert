import rembg
import sys
from PIL import Image

def remove_background(input_path, output_path):
    try:
        with open(input_path, 'rb') as i:
            input_data = i.read()
        
        output_data = rembg.remove(input_data)
        
        with open(output_path, 'wb') as o:
            o.write(output_data)
        print("Successfully removed background")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_background(sys.argv[1], sys.argv[2])
