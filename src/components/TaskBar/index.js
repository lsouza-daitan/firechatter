import React from 'react';
import './style.css';

class TaskBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
        };

        this.listenToModel();
    }

    render() {
        return (
            <div className='task-bar'>
                {this.state.tasks.map(this.renderTask)}
            </div>
        );
    }

    renderTask(task) {
        const className = ['task-bar__task', task.status];
        return (
            <button key={task.id} className={className.join(' ')}>
                <span>{task.name}</span>
            </button>
        );
    }
    
    listenToModel() {
        // TODO: usar tasks de verdade
        this.state.tasks = [
            { id: 'task-1', name: 'Estudar React', status: 'inprogress' },
            { id: 'task-2', name: 'Fazer Chat', status: 'inprogress' },
            { id: 'task-3', name: 'Jogar Hollow Knight', status: 'pending' },
            { id: 'task-4', name: 'Bazinga', status: 'closed' },
        ];
        // Rebase.bindToState('/chatroom', {
        //     context: this,
        //     state: 'messages',
        //     asArray: true,
        //     queries: {
        //         orderByChild: 'timestamp',
        //         limitToLast: 50,
        //     },
        //     then: () => this.setState({ isLoading: false }),
        // });
    }
}

export default TaskBar;
