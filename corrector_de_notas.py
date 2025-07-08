'''
Como desafío, se te ha asignado la tarea de desarrollar un código que contabiliza las puntuaciones de estudiantes de una institución educativa de acuerdo con sus respuestas en una prueba. Este código debe ser probado para un ejemplo de 3 estudiantes con una lista de listas en la que cada lista tiene las respuestas de 5 preguntas objetivas de cada estudiante. Cada pregunta vale un punto y las alternativas posibles son A, B, C o D.

Si alguna alternativa en una de las pruebas no está entre las alternativas posibles, debes lanzar un ValueError con el mensaje "La alternativa [alternativa] no es una opción de alternativa válida". El cálculo de las 3 notas solo se realizará mediante las entradas con las alternativas A, B, C o D en todas las pruebas. Si no se lanza la excepción, se mostrará una lista con las notas en cada prueba.

Datos para la prueba del código:
respuestas = ['D', 'A', 'B', 'C', 'A']

Notas sin excepción:
tests_sin_ex = [['D', 'A', 'B', 'C', 'A'], ['C', 'A', 'A', 'C', 'A'], ['D', 'B', 'A', 'C', 'A']]

Notas con excepción:
tests_con_ex = [['D', 'A', 'B', 'C', 'A'], ['C', 'A', 'A', 'E', 'A'], ['D', 'B', 'A', 'C', 'A']]
'''
  
ALTERNATIVAS_DISPONIBLES = ['A', 'B', 'C', 'D']
RESPUESTAS = ['D', 'A', 'B', 'C', 'A']

def main():

    tests_sin_ex = [['D', 'A', 'B', 'C', 'A'], ['C', 'A', 'A', 'C', 'A'], ['D', 'B', 'A', 'C', 'A']]
    tests_con_ex = [['D', 'A', 'B', 'C', 'A'], ['C', 'A', 'A', 'E', 'A'], ['D', 'B', 'A', 'C', 'A']]

    lista_de_notas_sin_ex = list(map(calcular_puntaje, tests_sin_ex))
    print(lista_de_notas_sin_ex)



def calcular_puntaje(test: list) -> int:

    puntaje = 0
    try:
        for i in range(len(test)):

            if test[i] == RESPUESTAS[i]:
                puntaje += 1

            elif test[i] not in ALTERNATIVAS_DISPONIBLES:
                raise ValueError(f"La alternativa {test[i]} no es una opción de la alternativa válida")
              
    except Exception as e:
        print(e)
      
    else:
        return puntaje

if __name__ == '__main__':
    main()
