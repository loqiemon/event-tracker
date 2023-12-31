
import { Reorder } from "framer-motion"
import { TItem } from '../../pages/MainPage/MainPage'
import './Item.scss'
import { useNavigate } from 'react-router-dom'

type itemProps = {
    item: TItem
    setActive: Function;
    handleRemove: Function;
}

const variants  = {
    initial: {
        opacity: 0,
        height: 0
    },
    animate: {
        opacity: 1,
        height: 'auto'
    },
    exit: {
        opacity: 0,
        height: 0
    },
    whileDrag: {      
        scale: 1.1,
        backgroundColor: '#009ecb',
    }
    
}

function Item({item, handleRemove}: itemProps) {
  const navigate = useNavigate();
    
  return (
    <Reorder.Item
        className={item.less ? "item item-active": 'item'}
        value={item}
        {...variants}
        whileHover={{scale: 1.05, transition: { duration: .4 },}}
    >      
        <div className="item_start">
            <span className="item_id">{item.id}</span>
            <h4 className='item_name'>{item.name}</h4>
        </div>
        <div className="item_end">
            <span className="item_date">{new Date(item.date).toLocaleDateString()}</span>
            <i 
                className="fa fa-trash item_icon"
                onClick={() => handleRemove(item.id)}
            />
            <i 
                className="fa-regular fa-pen-to-square item_icon"
                onClick={() => navigate(`edit/${item.id}`)}
            />
        </div>
    </Reorder.Item>
  )
}

export default Item
