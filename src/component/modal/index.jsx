import React from 'react'

const Modal = ({
    open = false, setOpen = () => { },
    onOk = async () => { },
    title = "",
    description = ''
}) => {
    if (!open) {
        return <></>
    }
    return (
        <> <div style={{
            background: '#fff',
            height: '100vh',
            width: '100vw',
            top: 0,
            left: 0,
            backgroundColor: '#ffffffb1',
            position: 'fixed',
            zIndex: 99,
        }}
            onClick={() => {
                setOpen(false)
            }}
            />
            <div style={{
                background: '#fff',
                height: '200px',
                width: '400px',
                zIndex: 999,
                position: 'fixed',
                boxShadow: '1px 1px 10px #000000a3',
                padding: 8,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                flexDirection: 'row',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div >{title}</div>
                    <button style={{ background: '#00000000', border: 'none', cursor: 'pointer' }} onClick={() => {
                        setOpen(false)
                    }}>X</button>
                </div>
                <div style={{
                    flexGrow: 1,
                    display: 'flex'
                }}>{(description.length > 10 ? `${description.slice(0, 10)}...` : description)}</div>
                <div >
                    <button style={{ background: '#00000000', border: 'none', cursor: 'pointer' }}
                        onClick={async () => {
                            await onOk();
                            setOpen(false)
                        }}
                        >Submit</button>
                </div>
            </div></>
    )
}

export default Modal
