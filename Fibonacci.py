def f(n):
    contador = 0
    n1 = n2 = 1
    print(n1)
    print(n2)
    while contador != n:
        print(n1+n2)
        temp = n1
        n1 = n1+n2
        n2 = temp
        contador += 1

f(10)