var Todo;
(function (Todo) {
    var Input = function (_a) {
        var value = _a.value, onclick = _a.onclick, checked = _a.checked, type = _a.type, name = _a.name, setValue = _a.setValue, onClick = _a.onClick;
        return (h("input", { value: value, name: name, checked: checked, type: type, onclick: onClick
                ? function (e) {
                    onClick(e);
                    e.preventDefault();
                    return false;
                }
                : (onclick), onkeyup: function (e) { setValue(e.target.value); } }));
    };
    var Div = function (props) {
        return h("div", null, props.children);
    };
    var CtrlTodoItem = function (_a) {
        var item = _a.item;
        return (h("li", null,
            h("label", null,
                h(Input, { type: "checkbox", checked: item.completed ? "checked" : "", onClick: item.toggleCompleted.bind(item) }),
                h("span", { style: "text-decoration:" + (item.completed ? "line-through" : "none") }, item.title))));
    };
    var CtrlTodoStat = function (_a) {
        var model = _a.model;
        return (h("div", null,
            h(Input, { type: "radio", name: "Name_@ELEM_NUM@", checked: model.view == Todo.Views.Active ? "checked" : "", onClick: model.setView.bind(model, Todo.Views.Active) }),
            "Active: ",
            h("span", null, model.numActive()),
            h(Input, { type: "radio", name: "Name_@ELEM_NUM@", checked: model.view == Todo.Views.Completed ? "checked" : "", onClick: model.setView.bind(model, Todo.Views.Completed) }),
            "Completed: ",
            h("span", null, model.numCompleted()),
            h(Input, { type: "radio", name: "Name_@ELEM_NUM@", checked: model.view == Todo.Views.All ? "checked" : "", onClick: model.setView.bind(model, Todo.Views.All) }),
            "All: ",
            h("span", null, model.numTodos())));
    };
    var CtrlTodoStat2 = function (_a) {
        var model = _a.model;
        return (h("div", null, [Todo.Views.Active, Todo.Views.Completed, Todo.Views.All].map(function (i) {
            return h("label", { style: "text-decoration: underline; margin-right: 10px;" },
                h(Input, { type: "radio", name: "Name_ELEM_NUM@", checked: model.view == i ? "checked" : "", onClick: model.setView.bind(model, i) }),
                Todo.Views[i],
                " (",
                model.viewCount(i),
                ")");
        })));
    };
    Todo.CtrlTodo = function (model) {
        var input = "";
        return _NOGC(function () { return (h("form", { onsubmit: function (e) { e.preventDefault(); return false; } },
            _R(model, function () {
                return h(Div, null,
                    h(Input, { type: "text", value: input, setValue: function (v) { input = v; } }),
                    h("button", { onclick: function () { model.addTodo(input); input = ""; }, type: "submit" }, " Add "));
            })(),
            h(CtrlTodoStat, { model: model }),
            h("hr", null),
            h(CtrlTodoStat2, { model: model }),
            h("hr", null),
            h("div", { style: "max-height: 400px; overflow-y: scroll" }, _R(model.viewItems, function () {
                return h("ul", null, model.viewItems().map(function (item) {
                    return (h(CtrlTodoItem, { item: item }));
                }));
            })()),
            h("hr", null),
            h("div", null, "NOTE: Either the router or FF browser is remembering scroll position after refresh!!"))); });
    };
})(Todo || (Todo = {}));
