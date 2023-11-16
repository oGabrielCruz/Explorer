from turtle import Turtle

t = Turtle()
def esquerda():
    t.left(180)
    t.forward(100)

def direita():
    t.right(0)
    t.forward(100)

def baixo():
    t.left(270)
    t.forward(100)

def cima():
    t.left(90)
    t.forward(100)


t.screen.mainloop()
