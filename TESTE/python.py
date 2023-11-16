from turtle import Turtle

t = Turtle()
def quadrado():
    t.forward(100)
    t.left(90)
    t.forward(100)
    t.left(90)
    t.forward(100)
    t.left(90)
    t.forward(100)

quadrado()
t.penup()
t.forward(100)
t.pendown()
quadrado()

t.screen.mainloop()
