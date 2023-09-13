# subprocess

```py
program = ['program-name', 'arguments']
result = subprocess.run(program, stdout=subprocess.PIPE, input=out.encode('utf-8') )
if result.returncode == 0:
    print("program ran successfully")
```

- `subprocess.run()` return a object with following properties
    - `stdout` - string with the output
    - `returncode` - return code of the program
    - `result.stdout.decode('utf-8')` - decode the stdout
