from turtle import Turtle ,  Screen

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

screen = Screen()
screen.listen()
screen.onkey(esquerda, "Left")
screen.onkey(direita, "Right")
screen.onkey(baixo, "Down")
screen.onkey(cima, "Up")


t.screen.mainloop()
