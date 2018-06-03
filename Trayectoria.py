from math import pi, tan, cos

g = 9.81    # aceleracion de la gravedad
v0 = 22     # velocidad inicial
theta = 60  # angulo de lanzamiento
x = 0.5     # coordenada horizontal
y0 = 1      # coordenada vertical

print("""\
Velocidad inicial           =   %.2f Km/s 
Angulo de lanzamiento       =   %d grados 
Aceleracion de la gravedad  =   %.2f m/s 
Coordenada horizontal       =   %g
Coordenada vertical         =   %g 
""" % (v0, theta, g, x, y0))

# Convert v0 to m/s and theta to radians
v0 = v0/3.6
theta = (theta*pi)/180

y = x*tan(theta) - 1/(2*v0**2)*g*x**2/((cos(theta))**2) + y0
# trayectoria de la pelota

print('Trayectoria de la pelota    =   %.1f m' % (y))


