import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return(
        <main className="todo_list_template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form_wrapper">
                {form}
            </section>
            <section className="todo_wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoListTemplate;