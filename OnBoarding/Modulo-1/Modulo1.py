
#Función print()
print('Hola desde la consola')

#Variables
sum = 1 + 2 
product = sum * 2
print(product)

#Tipos de datos
distancia = 4.367
type(distancia)

#Fechas
from datetime import date
date.today()
print(date.today())

#Conversión de tipo de datos
print("Today's date is: " + str(date.today()))

#Recopilar información

#Usuario
print("Bienvenido al programa de bienvenida")
name = input("Introduzca su nombre ")
print("Saludos: " + name)

#Numeros
print("Calculadora")
first_number = input("Primer número: ")
second_number = input("Segundo número: ")
print(int(first_number) + int(second_number))

