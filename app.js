var InpText = document.getElementById('InpText')
var addTodosItem = document.getElementById('addTodosItem')
var ULlist = document.getElementById('ULlist')

function addTodos() {

    var InpVal = InpText.value
    var InpValNode = document.createTextNode(InpVal)
    var list = document.createElement('li')
    list.setAttribute('class', 'lists')
    list.appendChild(InpValNode)
    ULlist.appendChild(list)


    var dltbtn = document.createElement('button')
    dltbtn.setAttribute('onclick', 'delTodo(this)')
    var dltNode = document.createTextNode('Delete')
    dltbtn.appendChild(dltNode)
    list.appendChild(dltbtn)



    var editbtn = document.createElement('button')
    editbtn.setAttribute('onclick', 'editTodo(this)')
    var editNode = document.createTextNode('Edit')
    editbtn.appendChild(editNode)
    list.appendChild(editbtn)



    InpText.value = ''


}


function delTodo(element) {

    element.parentNode.remove()

}


function editTodo(element) {

    element.parentNode.firstChild.nodeValue = prompt('Edit Text', element.parentNode.firstChild.nodeValue)
}

function dltAll() {

ULlist.innerHTML = ''

}