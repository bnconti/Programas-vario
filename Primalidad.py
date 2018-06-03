def comprobar_primalidad(numero, divisor=2):
    while divisor < numero:
        resto = numero % divisor
        if resto == 0:
            print ("El numero", numero ,"no es primo")
            return 0
        else:
            divisor += 1
    print ("El numero", numero ,"es primo")
    return 1

#while True:
#    numero = int(input("Ingrese el número para verificar su primalidad: "))
#    comprobar_primalidad(numero, 2)

totalPrimos = 0
totalNumeros = 1000000
for i in range(totalNumeros):
    resultado = comprobar_primalidad(i)
    totalPrimos += resultado

porcentaje = float((totalPrimos/totalNumeros)*100)
print("Porcentaje de numeros primos =", porcentaje, "%.")
print(totalPrimos, "de", totalNumeros)
