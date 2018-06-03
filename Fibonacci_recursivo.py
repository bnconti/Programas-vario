def f(t):
    if t < 1:
        return 1
    else:
        x = f(t-1) + f(t-2)
        print (x)
        return x

f(8)


# def fibFastRec(n):
#     def fib(prvprv, prv, c):
#         if c < 1:
#             print (prvprv)
#             return prvprv
#         else:
#             x = fib(prv, prvprv + prv, c - 1)
#             print (x)
#             return x
#     return fib(0, 1, n)
#
# fibFastRec(10)
