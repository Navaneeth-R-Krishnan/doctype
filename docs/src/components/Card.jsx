import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import PropTypes from 'prop-types';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag= {{scale: 1.3}}className=" relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt/>
        <p className="text-lg leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className="flex items-center justify-between py-3 px-8  mb-3">
                <h5>{data.filesize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                    {data.close ? <IoIosCloseCircleOutline /> :<LuDownload size="0.7em" color="#fff"/>}
                
                </span> 
            </div>
            {
                data.tag.isOpen ? (<div className={`tag w-full py-5 ${data.tag.tagColor === "blue"? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>) : null
            }
            

        </div>
        </motion.div>
  )
}
Card.propTypes = {
  reference: PropTypes.object.isRequired,
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    filesize: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      tagTitle: PropTypes.string.isRequired,
      tagColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
