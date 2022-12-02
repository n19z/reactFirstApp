
import '../App.css';


const Modal = (props) => {
    if (!props.show) {
        return null
    }

    const divStyle = {
        backgroundImage: 'url(' + props.imgUrl + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center,'
      };
    return (
        <div className="modal" onClick={props.onClose}>
            <div 
                className="modal-content" 
                onClick={e => e.stopPropagation()}
                style ={divStyle}
            >
                <div className="modal-header">
                    <h4 className='modal-title'>{props.title}</h4>
                </div>
                <div className="modal-body">{props.quote}</div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className='button'>Закрыть</button>
                </div>
            </div>
        </div>

    )

};

export default Modal;