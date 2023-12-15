# Introducción

La inteligencia artificial es un campo de estudio multidisciplinario que busca emular la capacidad cognitiva humana mediante sistemas y algoritmos. En este contexto, los enfoques de sistemas que actúan como humanos, piensan como humanos, piensan racionalmente y actúan racionalmente delinean las principales corrientes de investigación. Cada una de estas perspectivas, junto con sus respectivas pruebas y desafíos, ha contribuido al desarrollo y evolución de la IA a lo largo del tiempo.

La colaboración y aportaciones de disciplinas como la economía, neurociencia, psicología y lingüística ha sido esencial para comprender los mecanismos de pensamiento humano, sirviendo como base para la construcción de modelos y algoritmos. Desde sus primeras manifestaciones hasta los desafíos y avances contemporáneos, la historia de la inteligencia artificial refleja el persistente esfuerzo humano por descifrar y replicar procesos cognitivos.

A medida que los primeros trabajos con redes neuronales y sistemas basados en reglas pavimentaron el camino para la IA, se evidenció la necesidad de superar desafíos tecnológicos y de diseño.

# Unidad 1: Introducción a la Inteligencia Artificial

A grandes rasgos la inteligencia artificial presenta 4 enfoques principales, sistemas que piensan como humanos, sistemas que piensan racionalmente, sistemas que actúan como humanos y sistemas que actúan racionalmente. Estos se dividen en 2 grupos: el primero basado en la racionalidad y el segundo en la humanidad.

El primer enfoque, sistemas que actúan como humanos, puede describirse utilizando la “Prueba de Turing”, la cual consiste en una serie de preguntas cuyas respuestas son evaluadas. El propósito es diferenciar, mediante esta evaluación, si son realizadas por una entidad inteligente o un ser humano.

El segundo enfoque, sistemas que piensan como humanos, describe que para que una inteligencia artificial “piense como humano” es necesario que tenga un tiempo de reacción similar a los que tendría un ser humano. 

El tercer enfoque, sistemas que piensan racionalmente, la inteligencia artificial esta basada en la resolución de problemas mediante el uso de la lógica, siempre y cuando se tenga un contexto suficiente que permita realizar la toma de decisiones o resolver problemas. Una de las dificultades de este enfoque, es que puede haber mucha diferencia entre resolver un problema “en papel” y realizarlo de manera práctica, ya que en la práctica siempre pueden surgir factores que no se puedan tomar en cuenta.

Finalmente, el cuarto enfoque, sistemas que actúan racionalmente, se rige con los agentes racionales, los cuales tienen como fin alcanzar en la medida de lo posible el mejor resultado.

La inteligencia artificial, como es hoy en día, fue alimentada y desarrollada por investigadores y científicos de diversas áreas de conocimiento, teniendo como base los silogismos desarrollados por Aristóteles. Los primeros acercamientos nos narran la búsqueda por entender como funciona el proceso del pensamiento, desintegrarlo para conocer sus partes y encontrar la forma de generar estructuras que se puedan aplicar a cualquier problemática. Al mismo surge la necesidad de poder entender esto de manera matemática, ya que era necesario aterrizar todas las ideas generadas para transformarlas en ciencia formal. Áreas como la economía, neurociencia, psicología, lingüística, entre otras, hicieron significativos aportes para poder entender aún más el pensamiento y su funcionamiento, la toma de decisiones, procesos cognitivos, etc. Todo este mar de conocimiento forma la base para poder comenzar a entender la complejidad que conforma la inteligencia y nos demuestra la larga carrera que ha tenido el ser humano para comprenderla e intentar replicarla.

Los primeros trabajos con redes neuronales detonaron los primeros desarrollos realizados para definir la IA, fueron sistemas para probar teoremas, el primer acercamiento a los juegos que en este caso fueron las damas, a su vez, se generó el primer sistema considerado completo de IA, el Generador de Consejos, además, durante este tiempo surgió Lisp, el primer lenguaje de programación dominante para el desarrollo de Inteligencia artificial. Tras una temporada de éxitos, llego un punto en el cual la IA se vio estancada por diversas limitaciones de la época, el hardware no era suficiente, además de que al intentar realizar tareas más complejas los diseños de esa época no eran suficientes. Esto provoco que muchos de los apoyos que el gobierno realizaba fueran nulos o se eliminaran casi por completo

Poco después, comenzó el desarrollo de sistemas los cuales estaban basados en reglas, estos tuvieron gran éxito, uno de ellos fue el sistema MYCIN, dedicado al diagnostico de infecciones sanguíneas. El crecimiento generalizado de aplicaciones para solucionar problemas del mundo real provocó el respectivo aumento en la demanda de esquemas de representación del conocimiento que funcionaran.

La IA ha tenido ha tenido un avance bastante rápido, poco a poco se han ido creando programas más complejos que resuelvan problemas más grandes, en pocas palabras se ha vuelto indispensable para reducir tiempos en distintas actividades, tanto así que muchas disciplinas diferentes han encontrado elementos en común con la inteligencia artificial y han comenzado a implementarla

# Unidad 2: Agentes

Un **agente** es cualquier entidad con la capacidad de percibir su entorno con la ayuda de sensores y llevar a cabo acciones mediante actuadores. Los agentes cuentan con una secuencia de percepciones que muestra el historial completo de todas las entradas que ha recibido; esta tabla se va alimentando dependiendo de las funciones que realice.

Un agente se vuelve racional al tomar decisiones que conducen al mejor resultado o lo *“correcto”*. Hacer lo correcto puede ser ambiguo; para propósitos de los agentes, es lo que le permite al agente obtener el mejor resultado. Para evaluar el éxito de un agente en sus acciones, se emplean medidas de rendimiento como criterios.

Para lograr el éxito, un agente racional debe tomar decisiones basadas en lo que pasa en su entorno y en lo que percibe. Para eso, realiza un proceso de exploración para conocer y aprender de lo que lo rodea; esto alimenta su lista de percepciones y, por tanto, acciones. Si al realizar alguna de las acciones el agente falla, lo ideal es que pueda aprender de la experiencia para evitar obtener el mismo resultado. Esto convierte al agente racional en independiente.

## Desarrollo de un Agente

Para comenzar con el desarrollo de un agente, es importante empezar con el *entorno de trabajo*. Este es el espacio donde habitará el agente, el cual debe contener la mayor cantidad de detalles posibles para que el agente pueda cumplir con sus objetivos. Existen varios tipos de entornos, tales como:

- *Totalmente observable:* Permite al agente detectar todo aspecto relevante.
- *Parcialmente observable:* Existe alguna limitante para poder obtener la información completa del entorno.
- *Determinista:* Todo estado se encuentra determinado por el estado actual y la acción ejecutada del agente.
- *Estocástico:* Es lo contrario al determinista, ya que solo se encuentra parcialmente determinado.
- *Episódicos:* Cada episodio consiste en la percepción y una única acción. Cada episodio es independiente de los anteriores.
- *Secuencial:* En estos, las decisiones tomadas con anterioridad afectan a las siguientes.
- *Estático:* El entorno no tiene cambios en el momento que el agente está deliberando.
- *Dinámico:* Es lo contrario al estático, ya que se pueden presentar cambios.
- *Discreto:* Un entorno tiene un número de estados finitos.
- *Continuo:* El número de estados cambia dependiendo de las percepciones.
- *Agente individual:* En un entorno, no hay necesidad de medir el rendimiento realizando la comparación con otro agente.
- *Multiagente:* En este entorno, sí existe la comparación, ya que lo esperado es que se maximice el rendimiento dependiendo del comportamiento de cada agente involucrado.

Una vez definida la conducta que tendrá un agente y las acciones que realizará, es necesario diseñar el *programa del agente*, el cual es el encargado de proyectar las percepciones en las acciones. Este deberá contar con sensores físicos y actuadores, además de ser ejecutado dentro de algún tipo de computadora. Los programas de los agentes únicamente están capacitados para recibir la percepción actual del entorno como entrada. En el caso de que las acciones dependan del historial de percepciones, el agente debe tener la capacidad de recordarlas.

Existen 4 tipos básicos de programas para agentes:

- *Reactivos simples:* Realizan acciones dependiendo de las percepciones actuales.
- *Reactivos basados en modelos:* Cuentan con un estado interno que depende de su histórico de percepciones.
- *Basados en objetivos:* Necesitan información sobre el resultado esperado para poder generar las acciones posibles.
- *Basados en utilidad:* Además de necesitar información sobre el resultado, también es necesario indicar una función de utilidad, la cual muestra cuál de las secuencias de acciones es la más eficiente.

# Unidad 3: Resolver problemas mediante búsqueda

Los agentes inteligentes deben maximizar su medida de rendimiento. Esto puede ser alcanzado mediante la definición de objetivos, formulados con base en la situación actual y la medida de rendimiento del agente. Una vez definido, se pasa a la formulación del problema en donde se decide que acciones y estados se deben considerar.

Para comprender lo que implica un problema, se pueden utilizar 4 componentes:
- Estado inicial del agente
- Descripción de las posibles acciones disponibles
- El test objetivo, que determina si un estado es un objetivo
- Función de costo del camino, que asigna un valor numérico a cada una de las opciones que tiene el agente

Una vez que el agente haya obtenido una serie de posibles opciones, realiza una búsqueda para encontrar la más adecuada para alcanzar su objetivo. Este proceso de búsqueda toma una entrada y devuelve una solución, para posteriormente ejecutar sus acciones; esta fase se llama ejecución. Este proceso se repite hasta llegar al objetivo final.

Para realizar la búsqueda de la solución, podemos utilizar el árbol de búsqueda. Un árbol de búsqueda es una estructura de datos que comienza con un nodo padre y se desglosa en diferentes nodos, convirtiéndose en nodos hijos, que a su vez pueden tener otros nodos. Cada uno de estos tiene 5 componentes:
- Estado, es el estado correspondiente al nodo
- Nodo padre, es el responsable de la generación del nodo
- Acción, es la acción que será aplicada al padre para generar el nodo
- Costo del camino, es el costo del recorrido indicado por los punteros a los padres
- Profundidad, define la cantidad de espacios entre el estado inicial y el nodo

Hay varias estrategias que se pueden seguir para recorrer un árbol de búsqueda:
- Búsqueda por anchura, que consiste en ir expandiendo los sucesores del nodo raíz. Es necesario expandir todos los nodos de un nivel antes de expandir los del siguiente.
- Búsqueda de costo uniforme, esta búsqueda va expandiendo los nodos con el camino más pequeño, siempre y cuando haya diferencia en sus costos.
- Búsqueda primero en profundidad, este método siempre hace una expansión del nodo más profundo, una vez que se llega a la máxima profundidad se retrocede al siguiente nodo más superficial que aún tenga sucesores los cuales no hayan sido explorados.
- Búsqueda de profundidad limitada, esta búsqueda solo expande los nodos hasta una profundidad dada.
- Búsqueda con profundidad iterativa, esta encuentra el mejor límite de profundidad. Va aumentando gradualmente su límite.
- Búsqueda bidireccional, este tipo realiza dos búsquedas, una desde el nodo raíz y la otra desde el objetivo.

# Unidad 4: Búsqueda informada y exploración
# Estrategias de búsqueda informada

Para comenzar a entender las búsquedas informadas, comenzamos con la búsqueda primero el mejor, la cual selecciona un nodo basado en la función de evaluación, tendiendo a ser el nodo con la evaluación más baja. Un componente clave de este tipo de algoritmos de búsqueda es la función heurística, la cual describe el coste del camino más barato desde un nodo a un nodo objetivo.

La búsqueda voraz primero el mejor trata de expandir el nodo más cercano al objetivo, bajo la suposición de que probablemente conduzca rápidamente a una solución. Este tipo de búsqueda es similar a la primero en profundidad, tanto en funcionamiento como en defectos, ya que no es óptima y es incompleta.

La búsqueda A* evalúa los nodos combinando el coste para alcanzar el nodo y el coste de ir al objetivo. A diferencia de la anterior, esta sí es completa además de óptima. A pesar de esto, A* tiene una desventaja principal y es que, frente a problemas demasiado grandes, ya que, al generar todos los nodos en memoria, tiende a quedarse sin espacio antes de quedarse sin tiempo.

La búsqueda heurística con memoria acotada es un algoritmo que busca imitar la operación de la búsqueda primero el mejor estándar, pero utilizando solo un espacio lineal. Su estructura mantiene la pista del valor del mejor camino alternativo disponible desde cualquier antepasado del nodo actual, en caso de que el nodo actual exceda el límite, la recursividad vuelve al camino alternativo. De este modo, este algoritmo puede recordar el valor de la mejor hoja del subárbol para decidir si expandir o no dicho subárbol más tarde.

# Algoritmos de búsqueda local y problemas de optimización

Los algoritmos de búsqueda local funcionan con un solo estado actual y normalmente se mueven solo a los vecinos del estado. Este tipo de algoritmos tienen dos ventajas claves:

- Usan muy poca memoria.
- Pueden encontrar soluciones razonables en espacios de estados grandes o infinitos.

Además, son útiles para resolver problemas de optimización.

El algoritmo de ascensión de colinas es un bucle que se mueve en dirección del valor creciente, este termina cuando alcanza un pico en donde ningún vecino tiene un valor más alto. Este tipo de algoritmos no presentan un árbol de búsqueda, presentan una estructura de datos del nodo actual, el cual necesita solo el registro del estado y su valor de función objetivo. La ascensión de colinas puede llegar a atascarse durante su ejecución por los siguientes motivos:

- Máximo local, este es un pico más alto de cada uno de sus vecinos, pero más abajo del máximo global.
- Crestas, estas causan una secuencia de máximos locales que hace muy difícil la navegación para los algoritmos avaros.
- Meseta, es un espacio de estados donde la evaluación es plana, lo cual provoca que no haya ninguna salida ascendente.

Este tipo de algoritmo cuenta también con variantes que modifican su estructura, lo cual le da una forma de abordar un problema de maneras diferentes, algunas de ellas son:

- Ascensión de colina estocástica, donde sus movimientos ascendentes son aleatorios.
- Ascensión de colinas de primera opción, genera sucesores al azar hasta que se genera uno que es mejor que el estado actual.
- Ascensión de colinas de reinicio aleatorio, esta realiza una serie de búsquedas en ascensión de colinas desde los estados iniciales generados aleatoriamente.

El algoritmo búsqueda de haz local guarda la pista de varios estados. Este comienza con estados generados aleatoriamente. En cada paso se generan todos los sucesores de dichos estados, si alguno es un objetivo, el algoritmo se detiene.

Un agente de búsqueda en línea funciona mediante el intercalado del cálculo y la acción; primero toma una acción, observa el entorno y calcula la siguiente acción. Este tipo de búsqueda es adecuada en dominios dinámicos o semidinámicos. También, es una idea necesaria para un problema de exploración donde los estados y las acciones son desconocidos por el agente. Un problema que presenta esta búsqueda es que solo puede realizarse por un agente que ejecute acciones, más que por un proceso computacional.

# Conclusión

En retrospectiva, la inteligencia artificial ha recorrido un camino largo desde sus inicios hasta el panorama actual. Desde los primeros esfuerzos por entender y replicar el pensamiento humano hasta los sistemas basados en reglas y redes neuronales de última generación, la IA ha demostrado ser una disciplina en constante evolución. 

En última instancia, la inteligencia artificial, más allá de sus logros técnicos, es un testimonio de la capacidad humana para explorar, comprender y recrear la complejidad de la inteligencia. En el horizonte, se vislumbran nuevos desafíos y descubrimientos que seguirán definiendo la IA y su impacto en el mundo, subrayando la necesidad de una reflexión continua y una orientación ética en este emocionante viaje hacia el futuro.
