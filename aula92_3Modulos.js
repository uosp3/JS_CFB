const cursos=['javascript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']
const carros=['Polo', 'T-Cross', 'Golf', 'Onix', 'Cruze', 'Argo', 'Civic']

export {carros}

export default function getTodosCursos(){ //so pode usar export default apenas 1 vez por módulo
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos, getCurso} //alternativa para exportar mais de uma função, sem o default.