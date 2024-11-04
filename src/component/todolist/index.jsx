import React, { useState } from "react";
import { DeleteIcon, PlusIcon } from "../../assets";
import Modal from "../modal";

const TodoList = () => {
    // const userData = [
    //     {
    //         id: 1,
    //         title: "Software Engineer",
    //         data: "Develops, tests, and maintains software applications to improve user experience and functionality.",
    //     },
    //     {
    //         id: 2,
    //         title: "Project Manager",
    //         data: "Oversees project timelines and collaborates with teams to ensure project goals are met efficiently.",
    //     },
    //     {
    //         id: 3,
    //         title: "Data Analyst",
    //         data: "Analyzes and interprets complex data to support decision-making and drive business insights.",
    //     },
    //     {
    //         id: 4,
    //         title: "UI/UX Designer",
    //         data: "Creates user-friendly designs to enhance product aesthetics and usability for a better customer experience.",
    //     },
    //     {
    //         id: 5,
    //         title: "Marketing Specialist",
    //         data: "Develops and executes marketing strategies to increase brand awareness and customer engagement.",
    //     },
    //     {
    //         id: 6,
    //         title: "Product Manager",
    //         data: "Leads cross-functional teams to deliver quality products that meet market and customer needs.",
    //     },
    //     {
    //         id: 7,
    //         title: "Sales Executive",
    //         data: "Builds relationships with clients and promotes products to meet and exceed sales targets.",
    //     },
    //     {
    //         id: 8,
    //         title: "Customer Support Specialist",
    //         data: "Provides assistance to customers, troubleshooting issues, and ensuring customer satisfaction.",
    //     },
    //     {
    //         id: 9,
    //         title: "Human Resources Coordinator",
    //         data: "Manages recruitment, onboarding, and employee engagement activities to foster a positive workplace.",
    //     },
    // ];
    const [title, setTitle] = useState('');
    const [description, SetDescription] = useState('');
    const [todoList, setTodoList] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    return (
        <div style={styles.mainContainer}>
            <div style={styles.inputmain}>
                <input type="text" placeholder="Search..." style={styles.inputstyle} />
            </div>
            <div style={styles.itemContainer}>
                {todoList.map((currentElement) => (
                    <div style={styles.dataContainer}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <h3 style={{ margin: 0 }}>{(currentElement.title.length > 10) ? ` ${currentElement.title.slice(0, 7)}...` : currentElement.title}</h3>
                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    borderWidth: 0,
                                    alignItems: 'flex-end',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setTodoList(prevState => {
                                    return prevState.filter(item => {
                                        return item.id !== currentElement.id
                                    });
                                })}
                            ><DeleteIcon /></button>
                        </div>
                        <p style={{ marginTop: 10 }}>{(currentElement.description.length > 100) ? `${currentElement.description.slice(0, 100)}...` : currentElement.description}</p>
                    </div>
                ))}

            </div>
            <button style={{
                width: "63px",
                height: "63px",
                bottom: 30,
                right: 30,
                background: '#00C8FF',
                borderRadius: '50%',
                border: 'none',
                position: 'fixed',
                cursor: 'crosshair'
            }} onClick={() => setOpen(true)}>
                <PlusIcon />
            </button>
            <Modal title="Add New Todo" open={open} setOpen={setOpen}
                description={<div>
                    <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} 
                    style={{
                        width:'300px',
                        marginLeft:40 ,
                        height:'30px',
                        borderWidth:1,
                        borderRadius:5,
                        marginTop: 20,
                    }}
                    />
                    <br /><br />
                    <input placeholder="Description" onChange={(e) => SetDescription(e.target.value)} 
                        style={{
                            width: '300px',
                            marginLeft:40 ,
                            height:'30px',
                            borderWidth:1,
                            borderRadius:5,
                        }}
                    />
                </div>
                }
                onOk={() => {
                    setTodoList(prevState => {
                        return [...prevState, {
                            title, description, id: Math.random()
                        }]
                    })
                }}
            />
        </div>
    );
};
const styles = {
    mainContainer: {
        display: "flex",
        alignItems: 'center',
        flexDirection: "column",
        gap: 16,
    },
    inputmain: {
        margin: 20,
    },
    itemContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap'
    },
    inputstyle: {
        width: 1250,
        height: 49,
        borderRadius: 8,
        borderColor: "#B3B3B3",
        backgroundColor: "#F9F9F9",
        fontFamily: "Microsoft YaHei UI",
    },
    dataContainer: {
        width: '250px',
        height: 120,
        backgroundColor: "#067F9A",
        padding: 20,
        borderRadius: 16,
        color: "white",
        display: "inline-block",
        fontFamily: "Microsoft YaHei UI",
    },
    headingmain: {
        display: 'inline',
        flexDirection: 'row',
        alignItems: 'space-between'
    },
};
export default TodoList;
