import turtle
import time
import random

delay = 0.1
score = 0
high_score = 0

# Configurar a janela
window = turtle.Screen()
window.title("Jogo da Cobrinha")
window.bgcolor("blue")
window.setup(width=600, height=600)
window.tracer(0)

# Cabeça da cobrinha
head = turtle.Turtle()
head.speed(0)
head.shape("square")
head.color("white")
head.penup()
head.goto(0, 0)
head.direction = "Stop"

# Comida da cobrinha
food = turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("red")
food.penup()
food.goto(0, 100)

segments = []

# Texto de pontuação
pen = turtle.Turtle()
pen.speed(0)
pen.shape("square")
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Pontuação: 0  Recorde: 0", align="center", font=("Courier", 24, "normal"))


# Funções de movimento da cobrinha
def go_up():
    if head.direction != "down":
        head.direction = "up"


def go_down():
    if head.direction != "up":
        head.direction = "down"


def go_left():
    if head.direction != "right":
        head.direction = "left"


def go_right():
    if head.direction != "left":
        head.direction = "right"


def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)

    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)

    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)

    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)


# Verificar colisões da cobrinha com a comida
def check_collision():
    if head.distance(food) < 20:
        # Movimentar a comida para uma posição aleatória
        x = random.randint(-290, 290)
        y = random.randint(-290, 290)
        food.goto(x, y)

        # Adicionar um segmento ao corpo da cobrinha
        new_segment = turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")
        new_segment.penup()
        segments.append(new_segment)

        # Aumentar a pontuação
        global score, high_score
        score += 10
        if score > high_score:
            high_score = score

        # Atualizar a pontuação na tela
        pen.clear()
        pen.write("Pontuação: {} Recorde: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))


# Verificar colisões da cobrinha com as bordas
def check_border_collision():
    if head.xcor()>290 or head.xcor()<-290 or head.ycor()>290 or head.ycor()<-290:
        time.sleep(1)
        head.goto(0,0)
        head.direction = "Stop"

        # Esconder os segmentos da cobrinha
        for segment in segments:
            segment.goto(1000, 1000)

        # Limpar a lista de segmentos
        segments.clear()

        # Resetar a pontuação
        score = 0

        # Atualizar a pontuação na tela
        pen.clear()
        pen.write("Pontuação: {} Recorde: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))


# Verificar colisões da cobrinha com o próprio corpo
def check_self_collision():
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0, 0)
            head.direction = "Stop"

            # Esconder os segmentos da cobrinha
            for segment in segments:
                segment.goto(1000, 1000)

            # Limpar a lista de segmentos
            segments.clear()

            # Resetar a pontuação
            score = 0

            # Atualizar a pontuação na tela
            pen.clear()
            pen.write("Pontuação: {} Recorde: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))


# Configurar os comandos do teclado
window.listen()
window.onkeypress(go_up, "Up")
window.onkeypress(go_down, "Down")
window.onkeypress(go_left, "Left")
window.onkeypress(go_right, "Right")

# Loop principal do jogo
while True:
    window.update()

    # Movimentar a cabeça da cobrinha
    move()

    # Verificar colisões
    check_collision()
    check_border_collision()
    check_self_collision()

    # Movimentar os segmentos da cobrinha em ordem reversa
    for index in range(len(segments)-1, 0, -1):
        x = segments[index-1].xcor()
        y = segments[index-1].ycor()
        segments[index].goto(x, y)

    # Movimentar o primeiro segmento para a posição da cabeça
    if len(segments) > 0:
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x, y)

    # Atrasar o movimento da cobrinha
    time.sleep(delay)