import sys
import os
import shutil
import subprocess

def do_loop(i):
    print(f"<== ITERATION {i:02} ==>")
    if os.path.exists("dist"):
        shutil.rmtree("dist")
    
    try:
        subprocess.check_call(["npm.cmd", "run", "build"])
    except ChildProcessError:
        print("FAILED: Build did not complete successfully!")
        sys.exit(1)
    
    if not os.path.exists("dist"):
        print("FAILED: No dist directory created")
        sys.exit(1)
    
    if not os.path.exists(os.path.join("dist", "types")):
        print("FAILED: No dist/types directory created")
        sys.exit(1)

    print("OK")


def main():
    if len(sys.argv) < 2:
        print("Syntax: python loop.py <times to build>")
    
    times = int(sys.argv[1])
    for i in range(times):
        do_loop(i+1)

if __name__ == "__main__":
    main()