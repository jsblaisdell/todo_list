var todoTemplate = _.template($('#templates .todo').html());

var tasks = [
    { name: 'Check', complete: false },
    { name: 'Three', complete: false },
    { name: 'Items', complete: false },
];

var renderList = function() {
    $('.todos').empty();
    for (var i = 0; i < tasks.length; i++) {
        var task = todoTemplate(tasks[i]);
        $('.todos').append(task);
    }
};

renderList();

$('form').on('click', '.submit', function(e) {
    e.preventDefault();
    var newItem = $('.input').val();
    tasks.push({name: newItem, complete: false});
    $('.input').val("");
    renderList();
});

$('.todos').on('change', '.checkbox', function() {
    var index = $(this).parent().index();
    tasks[index].complete = !tasks[index].complete;
});

$('.todos').on('dblclick', '.todo', function(e) {
    e.preventDefault();
    $(this).children('.task-name').remove();
    $(this).append('<input class="edit-name">');
    $(this).children('.edit-name').focus();
});

$('.todos').on('keypress', '.edit-name', function(e) {
    if (e.which == 13) {
        var newTask = $(this).val();
        var index = $(this).parent().index();
        tasks[index].name = newTask;
        renderList();
    }
});
