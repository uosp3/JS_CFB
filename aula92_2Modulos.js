//import { cursos as c, carros, getCurso } from './aula92_Modulos2.js'
import * as nome from './aula92_3Modulos.js'  //= alternativa para a linha acima.
import getTodosCursos from './aula92_3Modulos.js'

//console.log(carros)
console.log(nome.carros)  //= a linha 5, se usar a linha 2 no lugar da 1

//console.log(c) //cursos recebeu um alias, foi renomeado na linha 1
console.log(nome.cursos) //= a linha 8, se usar a linha 2 no lugar da 1

//console.log(getCurso(0))
console.log(nome.getCurso(0)) //= a linha 11, se usar a linha 2 no lugar da 1

//console.log(getTodosCursos())
console.log(nome.default()) //=  a linha 14, se usar a linha 2 no lugar da 1

// para import function default não usa as chaves
// para função normal faz o import com chaves, mesmo como uma const(array), linha 1
// a função getCurso tb pode ser renomeada, como acontedeu com 'cursos'