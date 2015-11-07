import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data={this.props.data}/>
            <TodoForm />
        </div>
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: '',
            detailValue: ''
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeTitle(e) {
        this.setState({ titleValue: e.target.value });
    }

    changeDetail(e) {
        this.setState({ detailValue: e.target.value });
    }

    addTodo() {
        var newData = this.state.data;

        newData.push({
            title: this.state.titleValue,
            detail: this.state.detailValue
        });

        this.setState({ data:  newData });
        this.setState({ titleValue:  '' });
        this.setState({ detailValue:  '' });
    }

    render() {
        let todo = this.props.data.map(function (obj) {
            return (
                <Todo title={obj.title} key={obj.title}>
                    {obj.detail}
                </Todo>
            );
        });

        return (
            <div className="todoList">
                <div>
                    Title: <input type="text" value={this.state.titleValue} onChange={this.changeTitle}/>
                    Detail: <input type="text" value={this.state.detailValue} onChange={this.changeDetail}/>
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <table style={{border: "2px solid black"}}>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            TodoStyle: style.notCheckedTodo
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var checked = e.target.checked;

        this.setState({ checked: checked });
        this.setState({
            TodoStyle: checked ?  style.checkedTodo : style.notCheckedTodo
        });
    }

    render() {
        return (
            <tr style={this.state.TodoStyle}>
                <td style={{border: style.tableContent.border}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={{border: style.tableContent.border}}>
                    {this.props.title}
                </td>
                <td style={{border: style.tableContent.border}}>{this.props.children}</td>
            </tr>
        );
    }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
    render() {
        return <div className="todoForm">
            I am a Todoform.
        </div>
    }
}

let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
      border: "1px solid black"
  }
};

