/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.2(d49899a916fd99840f6f9178f2dd06e0e7013646)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.es",{"vs/base/common/keyCodes":["Windows","Control","Mayús","Alt","Cmd","Windows","Ctrl","Mayús","Alt","Cmd","Windows"],"vs/languages/html/common/htmlTags":["El elemento html representa la raíz de un documento HTML.","El elemento head representa una colección de metadatos para el documento.","El elemento title representa el título o el nombre del documento. Los autores deben usar títulos que identifiquen sus documentos aunque estén fuera de contexto, por ejemplo, en el historial o en los marcadores de un usuario, o en los resultados de la búsqueda. Con frecuencia, el título del documento es diferente de su primer encabezado, puesto que el primer encabezado no tiene que ser independiente cuando se saca de contexto.","El elemento base permite que los autores especifiquen la dirección URL base del documento para resolver las direcciones URL relativas y el nombre del contexto de exploración predeterminado para seguir los hipervínculos. El elemento no representa ningún otro contenido más allá de esta información.","El elemento link permite a los autores vincular su documento a otros recursos.","El elemento meta representa varios tipos de metadatos que no se pueden expresar con los elementos title, base, link, style y script.","El elemento style permite a los autores insertar información de estilo en sus documentos. El elemento style es una de las diversas entradas para el modelo de procesamiento de aplicación de estilos. El elemento no representa contenido para el usuario.","El elemento body representa el contenido del documento.","El elemento article representa una composición completa o autocontenida de un documento, página, aplicación o sitio que, en principio, se puede distribuir o reutilizar de manera independiente, por ejemplo, como redifusión web. Puede ser una publicación en un foro, un artículo de una revista o de un periódico, una entrada de blog, un comentario enviado por un usuario, un widget o gadget interactivo o cualquier otro elemento de contenido independiente. Cada elemento article debe identificarse, para lo que normalmente se incluye un encabezado (elemento h1 a h6) como elemento secundario del elemento article.","El elemento section representa una sección genérica de un documento o una aplicación. Una sección, en este contexto, es una agrupación temática de contenido. El tema de cada sección se debe identificar, normalmente, mediante la inclusión de un encabezado (elemento h1-h6) como elemento secundario del elemento section.","El elemento nav representa una sección de una página que se vincula a otras páginas o a partes dentro de la página: una sección con vínculos de navegación.","El elemento aside representa una sección de una página que consta de contenido tangencialmente relacionado con el contenido en torno al elemento aside y que puede considerarse independiente de dicho contenido. Estas secciones suelen representarse como barras laterales en la tipografía impresa.","El elemento h1 representa un encabezado de sección.","El elemento h2 representa un encabezado de sección.","El elemento h3 representa un encabezado de sección.","El elemento h4 representa un encabezado de sección.","El elemento h5 representa un encabezado de sección.","El elemento h6 representa un encabezado de sección.","El elemento header representa el contenido de introducción para su elemento raíz de sección o contenido de sección antecesor más cercano. Un encabezado suele contener un grupo de ayudas de navegación o de introducción. Cuando el elemento raíz de sección o el contenido de sección antecesor más cercano es el elemento body, se aplica a toda la página.","El elemento footer representa un pie de página para su elemento raíz de sección o contenido de sección antecesor más cercano. Un pie de página suele contener información sobre su sección, como quién la ha escrito, vínculos a documentos relacionados, datos de copyright y similares.","El elemento address representa la información de contacto de su antecesor más cercano, el elemento article o body. Si es el elemento body, la información de contacto se aplica al documento como un todo.","El elemento p representa un párrafo.","El elemento hr representa un salto temático de nivel de párrafo, por ejemplo, un cambio de escena en una historia o una transición a otro tema dentro de una sección de un libro de referencia.","El elemento pre representa un bloque de texto con formato previo, en el que la estructura se representa mediante convenciones tipográficas en lugar de mediante elementos.","El elemento blockquote representa contenido que se cita de otro origen, opcionalmente con una cita que debe encontrarse dentro de un pie de página o elemento cite e, igualmente de manera opcional, con cambios incorporados, tales como anotaciones y abreviaturas.","El elemento ol representa una lista de elementos en la que estos se han ordenado intencionadamente de manera que, si se cambiaran de orden, cambiaría el significado del documento.","El elemento ul representa una lista de elementos donde el orden de estos no es importante, es decir, el cambio del orden no cambiaría materialmente el significado del documento.","El elemento li representa un elemento de lista. Si su elemento primario es un elemento ol, ul o menu, entonces es un elemento de la lista del elemento primario, tal como se define para esos elementos. De lo contrario, el elemento de lista no tiene ninguna relación definida relacionada con la lista con cualquier otro elemento li.","El elemento dl representa una lista de asociaciones que consta de cero o más grupos nombre-valor (una lista de descripciones). Un grupo nombre-valor consta de uno o más nombres (elementos dt) seguidos de uno o más valores (elementos dd), sin tener en cuenta los nodos distintos de los elementos dt y dd. Dentro de un solo elemento dl, no debe haber más de un elemento dt para cada nombre.","El elemento dt representa el término, o nombre, que forma parte de un grupo término-descripción de una lista de descripciones (elemento dl).","El elemento dd representa la descripción, la definición o el valor, que forma parte de un grupo término-descripción en una lista de descripciones (elemento dl).","El elemento figure representa cierto contenido de flujo, opcionalmente con una leyenda, que es independiente (como una frase completa) y al que se suele hacer referencia como unidad única desde el flujo principal del documento.","El elemento figcaption representa un título o una leyenda para el resto del contenido del elemento de figura primario del elemento figcaption, si lo hay.","El elemento main representa el contenido principal del cuerpo de un documento o una aplicación. El área de contenido principal consta de contenido directamente relacionado con el tema central de un documento o la funcionalidad central de una aplicación, o bien lo expande.","El elemento div no tiene un significado especial. Representa sus elementos secundarios. Se puede usar con los atributos class, lang y title para marcar la semántica común a un grupo de elementos consecutivos.","Si el elemento a tiene un atributo href, representa un hipervínculo (un marcador de hipertexto) etiquetado por su contenido.","El elemento em representa el énfasis acentuado de su contenido.","El elemento strong representa la importancia significativa, la seriedad o la urgencia de su contenido.","El elemento small representa comentarios secundarios, como la letra pequeña.","El elemento s representa contenido que ya no es preciso o relevante.","El elemento cite representa una referencia a una obra creativa. Debe incluir el título de la obra o el nombre del autor (persona, personas u organización), una referencia de dirección URL o una referencia en forma abreviada según las convenciones usadas para agregar metadatos de cita.","El elemento q representa cierto contenido de frases citado de otro origen.","El elemento dfn representa la instancia de definición de un término. El párrafo, el grupo de lista de descripciones o la sección que sea el elemento antecesor más cercano del elemento dfn también debe contener las definiciones del término que proporciona el elemento dfn.","El elemento abbr representa una abreviatura o acrónimo, opcionalmente con su expansión. El atributo title se puede usar para proporcionar una expansión de la abreviatura. El atributo, si se especifica, debe contener una expansión de la abreviatura y nada más.",'El elemento ruby permite que uno o más fragmentos de contenido de frases se marque con anotaciones ruby. Las anotaciones ruby son pequeñas series de texto que se presentan en un texto base y se usan principalmente en la tipografía de Asia oriental como guía de pronunciación o para incluir otras anotaciones. En japonés, esta forma de tipografía también se conoce como furigana. El texto ruby puede aparecer en cualquier lateral del texto base, a veces incluso en los dos, y su posición se puede controlar con CSS. Para obtener una introducción más completa sobre ruby, consulte los documentos "Use Cases & Exploratory Approaches for Ruby Markup" (en inglés) y "CSS Ruby Module Level 1" (en inglés). [RUBY-UC] [CSSRUBY]',"El elemento rb marca el componente de texto base de una anotación ruby. Cuando es el elemento secundario de un elemento ruby, no representa nada por sí mismo, pero su elemento ruby primario lo usa como parte del proceso para determinar lo que representa.","El elemento rt marca el componente de texto ruby de una anotación ruby. Cuando es el elemento secundario de un elemento ruby o de un elemento rtc, que es a su vez elemento secundario de un elemento ruby, no representa nada por sí mismo, pero su elemento ruby primario lo usa como parte del proceso para determinar lo que representa.","El elemento rp se usa para proporcionar el texto de reserva que mostrarán los agentes de usuario que no admiten anotaciones ruby. Una práctica generalizada es proporcionar el componente de texto ruby de una anotación ruby entre paréntesis.","El elemento time representa su contenido, junto con un formato de lectura mecánica de ese contenido en el atributo datetime. El tipo de contenido está limitado a diversos tipos de fechas, horas, ajustes de zona horaria y duraciones, tal como se describe a continuación.","El elemento code representa un fragmento de código informático. Puede ser un nombre de elemento XML, un nombre de archivo, un programa informático o cualquier otra cadena que un equipo pueda reconocer.","El elemento var representa una variable. Puede ser una variable real en una expresión matemática o un contexto de programación, un identificador que representa una constante, un símbolo que identifica una cantidad física, un parámetro de función o simplemente un término usado como marcador de posición en texto.","El elemento samp representa una muestra o una salida entre comillas de otro programa o sistema informático.","El elemento kbd representa la entrada del usuario (normalmente entrada de teclado, aunque también se puede usar para representar otras entradas, como los comandos de voz).","El elemento sub representa un subíndice.","El elemento sup representa un superíndice.","El elemento i representa un fragmento de texto en una voz o un estado de ánimo alternativo, o cualquier otro desplazamiento respecto al texto normal de manera que indica una calidad diferente del texto, como una designación taxonómica, un término técnico, una frase idiomática de otra lengua, una transliteración, un pensamiento o un nombre de envío en textos occidentales.","El elemento b representa un fragmento de texto al que se dirige la atención con fines prácticos sin transmitir ninguna importancia adicional y sin que se implique una voz o un estado de ánimo alternativo, tales como las palabras clave del resumen de un documento, los nombres de producto en una revisión, las palabras accionables en software interactivo controlado por texto o el titular de un artículo.","El elemento u representa un fragmento de texto con una anotación no textual y no articulada, aunque explícitamente representada, por ejemplo, el texto se etiqueta como nombre propio en texto chino (una marca de nombre propio chino) o como texto mal escrito.","El elemento mark representa una serie de texto en un documento marcado o resaltado con fines de referencia, debido a su relevancia en otro contexto. Cuando se usa en una cita o en otro bloque de texto al que se hace referencia desde el texto, indica un resaltado que no estaba presente originalmente pero que se ha agregado para llamar la atención del lector a una parte del texto que puede que no se haya considerado importante por parte del autor original cuando el bloque se escribió originalmente, pero que se encuentra ahora bajo un escrutinio anteriormente inesperado. Cuando se usa en el texto principal de un documento, indica una parte del documento que se ha resaltado debido a su probable relevancia para la actividad actual del usuario.","El elemento bdi representa un fragmento de texto que se va a aislar de su entorno para aplicarle formato de texto bidireccional. [BIDI]","El elemento bdo representa el control del formato de direccionalidad de texto explícita para sus elementos secundarios. Permite a los autores reemplazar el algoritmo bidireccional Unicode al especificar explícitamente un reemplazo de dirección. [BIDI]","El elemento span no significa nada por sí mismo, pero puede ser útil cuando se usa junto con los atributos globales, por ejemplo, class, lang o dir. Representa sus elementos secundarios.","El elemento br representa un salto de línea.","El elemento wbr representa una oportunidad de salto de línea.","El elemento ins representa una adición al documento.","El elemento del representa la eliminación de algún elemento del documento.","El elemento picture es un contenedor que proporciona varios orígenes al elemento img que contiene para permitir a los autores controlar de forma declarativa o proporcionar sugerencias al agente de usuario sobre qué recurso de imagen se debe usar, en función de la densidad de píxeles de la pantalla, el tamaño de la ventanilla, el formato de imagen y otros factores. Representa sus elementos secundarios.","Un elemento img representa una imagen.","El elemento iframe representa un contexto de exploración anidado.","El elemento embed proporciona un punto de integración para una aplicación externa (normalmente no HTML) o contenido interactivo.","El elemento object puede representar un recurso externo que, en función del tipo del recurso, se tratará como imagen, como contexto de exploración anidado o como recurso externo que se procesará mediante un complemento.","El elemento param define parámetros para los complementos invocados por los elementos object. No representa nada por sí mismo.","Un elemento video se usa para reproducir vídeos, películas y archivos de sonido con subtítulos.","Un elemento de audio representa una secuencia de audio o sonido.","El elemento source permite a los autores especificar varios recursos de medios alternativos para elementos multimedia. No representa nada por sí solo.","El elemento track permite a los autores especificar pistas de texto cronometradas externas explícitas para elementos multimedia. No representa nada por sí mismo.","El elemento map, junto con un elemento img y cualquier descendiente de elemento area, define un mapa de imagen. El elemento representa sus elementos secundarios","El elemento area representa un hipervínculo con texto y el área correspondiente en un mapa de imagen o bien un área muerta en un mapa de imagen.","El elemento table representa datos con más de una dimensión en formato de tabla.","El elemento caption representa el título de la tabla que es su elemento primario, si tiene un elemento primario y este es un elemento table.","El elemento colgroup representa un grupo de una o más columnas de la tabla que es su elemento primario, si tiene un elemento primario que es un elemento table.","Si un elemento col tiene un elemento primario y este es un elemento colgroup que tiene a su vez un elemento primario que es un elemento table, el elemento col representa una o más columnas del grupo de columnas representadas por dicho elemento colgroup.","El elemento tbody representa un bloque de filas que consta de un cuerpo de datos para el elemento table primario, si el elemento tbody tiene un elemento primario y es una tabla.","El elemento thead representa el bloque de filas que consta de las etiquetas de columna (encabezados) para el elemento table primario, si el elemento thead tiene un elemento primario y este es una tabla.","El elemento tfoot representa el bloque de filas que consta de los resúmenes de columnas (pies de página) para el elemento table primario, si el elemento tfoot tiene un elemento primario y este es una tabla.","El elemento tr representa una fila de celdas en una tabla.","El elemento td representa una celda de datos en una tabla.","El elemento th representa una celda de encabezado de una tabla.","El elemento form representa una colección de elementos asociados a un formulario, de los cuales algunos pueden representar valores editables que se pueden enviar a un servidor para su procesamiento.","El elemento label representa un título en una interfaz de usuario. El título se puede asociar a un control de formulario específico (conocido como el control etiquetado del elemento label) con el atributo for o al colocar el control de formulario dentro del propio elemento label.","El elemento input representa un campo de datos escrito, normalmente con un control de formulario para permitir al usuario editar los datos.","El elemento button representa un botón etiquetado por su contenido.","El elemento select representa un control para seleccionar entre un conjunto de opciones.","El elemento datalist representa un conjunto de elementos option que representan las opciones predefinidas para otros controles. En la representación, el elemento datalist no representa nada y debería ocultarse junto con sus elementos secundarios.","El elemento optgroup representa un grupo de elementos de opción con una etiqueta común.","El elemento option representa una opción de un elemento select o como parte de una lista de sugerencias de un elemento datalist.","El elemento textarea representa un control de edición de texto sin formato multilínea para el valor sin formato del elemento. El contenido del control representa el valor predeterminado del control.","El elemento output representa el resultado de un cálculo realizado por la aplicación o el resultado de una acción del usuario.","El elemento progress representa el progreso de finalización de una tarea. El progreso puede ser indeterminado, que indica que se está progresando pero no está claro cuánto trabajo queda por hacer antes de que se complete la tarea (por ejemplo, porque la tarea está en espera de que un host remoto responda), o bien puede ser un número en un intervalo de cero a un valor máximo, que proporciona la fracción de trabajo que se ha completado hasta el momento.","El elemento meter representa una medición escalar dentro de un intervalo conocido o un valor fraccionario. Por ejemplo, la utilización del disco, la relevancia del resultado de una consulta o la fracción de una población de voto que ha seleccionado un candidato concreto.","El elemento fieldset representa un conjunto de controles de formularios agrupados opcionalmente bajo un nombre común.","El elemento legend representa un título o descripción para el resto del contenido del elemento fieldset primario del elemento legend, si lo hay.","El elemento details representa un widget de divulgación desde el que el usuario puede obtener controles o información adicional.","El elemento summary representa un resumen, un título o una leyenda para el resto del contenido del elemento details primario del elemento summary, si lo hay.","El elemento dialog representa una parte de una aplicación con la que un usuario interactúa para llevar a cabo una tarea, por ejemplo, un cuadro de diálogo, un inspector o una ventana.","El elemento script permite a los autores incluir bloques de datos y de script dinámicos en sus documentos. El elemento no representa contenido para el usuario.","El elemento noscript no representa nada si el scripting está habilitado y representa sus elementos secundarios si el scripting está deshabilitado. Se usa para presentar una marcación diferente para los agentes de usuario que admiten scripting y aquellos que no lo admiten, al afectar a la manera en que se analiza el documento.","El elemento template se usa para declarar fragmentos de HTML que se pueden clonar e insertar en el documento mediante script.","El elemento canvas proporciona scripts con un lienzo de mapa de bits dependiente de la resolución, que se pueden usar para representar gráficos, gráficos de juegos, ilustraciones u otras imágenes visuales sobre la marcha.","La casilla no difiere de la de entrada HTML, salvo en el estilo, y se comporta como cualquier casilla de AngularJS.","La directiva ionContent ofrece una forma fácil de usar un área de contenido que puede configurarse para usar la vista de desplazamiento personalizada de Ionic o el desplazamiento de desbordamiento integrado del explorador.","Elemento secundario de ionItem",'Agrega una barra de pie de página fija debajo de cierto contenido. También puede ser un subpie de página (más arriba) si se aplica la clase "bar-subfooter".','Agrega una barra de encabezado fija sobre cierto contenido. También puede ser un subencabezado (más abajo) si se aplica la clase "bar-subheader".',"Elemento secundario de ionContent o ionScroll. La directiva ionInfiniteScroll permite llamar a una función siempre que el usuario llegue al final de la página o cerca de este.",'ionInput se destina exclusivamente a entradas de tipo texto. Ionic usa un elemento HTML <input type="text"> dentro del componente y aplica el ajuste de Ionic para administrar mejor la experiencia del usuario y la interactividad.',"Elemento secundario de ionList.","Una lista es un elemento de la interfaz ampliamente usado en casi todas las aplicaciones móviles y puede incluir contenido que abarca desde texto básico hasta botones, botones de alternancia, iconos y miniaturas.","Modal es un panel de contenido que puede aparecer en la vista principal del usuario temporalmente. Se suele usar para elegir una opción o editar un elemento.","Elemento secundario de ionNavBar. Crea un botón para retroceder dentro de un elemento ionNavBar. El botón para retroceder aparecerá cuando el usuario pueda volver atrás en la pila de navegación actual.","Si tiene una directiva ionNavView, también puede crear un elemento <ion-nav-bar>, que creará una barra superior que se actualiza según cambia el estado de la aplicación.","Elemento secundario de ionNavView. Use ion-nav-buttons para establecer los botones que aparecen en ionNavBar en una vista ionView.","Elemento secundario de ionNavView. La directiva ionNavTitle reemplaza el texto de un título de ionNavBar con HTML personalizado de una plantilla ionView.","La directiva ionNavView se usa para representar plantillas en la aplicación. Cada plantilla forma parte de un estado. Los estados suelen asignarse a una dirección URL y se definen mediante programación con angular-ui-router.","Elemento secundario de ionItem. Crea un botón de opción dentro de un elemento de lista que queda visible cuando el usuario pasa el elemento a la izquierda.",'Contenedor simple que se ajusta al contenido, sin efectos secundarios. Agrega la clase "pane" al elemento.',"Popover es una vista que flota sobre el contenido de una aplicación. Las vistas Popover son una forma fácil de presentar información del usuario o de recopilarla.","La directiva ionRadio no difiere de la entrada de radio HTML, salvo en el estilo. ionRadio se comporta como una entrada de radio AngularJS.","Elemento secundario de ionContent o ionScroll. Permite agregar la opción de incorporar cambios para actualizar a una vista scrollView. Colóquelo como primer elemento secundario del elemento ionContent o ionScroll.","Elemento secundario de ionItem.","Crea un contenedor desplazable para todo el contenido incluido.","Elemento secundario de ionSideMenus. Contenedor para un menú lateral, del mismo nivel que una directiva ionSideMenuContent.","Elemento secundario de ionSideMenus. Contenedor del principal contenido visible, del mismo nivel que una o varias directivas ionSideMenu.","Elemento contenedor de los menús laterales y del contenido principal. Permite alternar entre un menú a la izquierda o a la derecha si se arrastra el área de contenido principal de un lado a otro.","Elemento secundario de ionSlideBox. Muestra una diapositiva dentro de un elemento slidebox.","Slide Box es un contenedor multipágina en el que las páginas se pueden pasar o arrastrar.","La directiva ionSpinner proporciona diversos controles animados.","Elemento secundario de ionTabs. Incluye el contenido de una pestaña, que solo existe cuando la pestaña concreta está seleccionada.",'Se basa en una interfaz de varias pestañas con una barra de pestañas y un conjunto de "páginas" por las que puede desplazarse.',"ion-title es un componente que establece el título de ionNavbar","Un elemento toggle es un conmutador animado que enlaza un modelo dado a un valor booleano. Permite arrastrar el núcleo del conmutador. Por lo demás, el elemento toggle se comporta como cualquier casilla AngularJS.","Elemento secundario de ionNavView. Contenedor de la información de la barra de encabezado y de navegación, así como del contenido de la vista."]});
//# sourceMappingURL=../../../../../min-maps/vs/languages/html/common/htmlWorker.nls.es.js.map