#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Este programa calcula la cantidad de enlaces necesarios en una red de comunicaciones
# en el caso hipotético de que no puedan utilizarse nodos de conmutación.
# Author: Bruno N. Conti

"""
SAMPLE RUN:
100 nodos necesitan 4950 enlaces.
1000 nodos necesitan 499500 enlaces.
10000 nodos necesitan 49995000 enlaces.
"""

def calcular_enlaces(n):
    # n = total de equipos a conectar.
    total = 0
    for i in range(1, n+1):
        total += (n-1)/2
    return int(total)

a = 100; b = 1000; c = 10000; d = 2
print("{} nodos necesitan {} enlaces.".format(d, calcular_enlaces(d)))
print("{} nodos necesitan {} enlaces.".format(a, calcular_enlaces(a)))
print("{} nodos necesitan {} enlaces.".format(b, calcular_enlaces(b)))
print("{} nodos necesitan {} enlaces.".format(c, calcular_enlaces(c)))
