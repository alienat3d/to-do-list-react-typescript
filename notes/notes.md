* Компонентами является всё, что повторяется минимум 2 раза;

* Также компонентом является крупный законченный функционал (например: шапка, форма, )

* Модульный SCSS нужен для того, чтобы исключить влияние стилей из одного файла SCSS на другие стили. Для этого добавляем постфикс к названию стиля "module", что означает его инкапсуляцию. Импортировать мы его будем уже с помощью следующей команды "import classes from "./name.module.scss"; Т.о. из SCSS мы импортируем объект, в котором будут объекты\классы стилей. Также в вёрстке теперь вместо названия классов у нас будет "classes.className" (Пример Header.tsx). Теперь на выходе в такие классы будут добавляться наборы случайных символов префиксами и т.о. мы никогда не перезапишем одни CSS-стили другими. Также, эта технология обесценивает принципы БЕМ-классов, т.к. они в любом случае будут инкапсулированы.

* TypeScript, в отличии от JavaScript строго типизированный язык программирования, который однако по синтаксису очень походит на JavaScript и в итоге в него компилируется. Но главное его отличие TS от JS, что в первом, при компиляции постоянно идёт проверка типов. И если мы создадим 