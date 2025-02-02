import { useRef } from 'react';
import Card from "./Card"

function Foreground() {

    const ref = useRef(null);
    const data = [
        {desc: "Card 1 - Tasks to be done are as follows", filesize: "0.7mb", close:false, tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {desc: "Your mission should you choose to accept", filesize: "0.4mb", close:true, tag:{isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {desc: "Big steppers", filesize: "0.7mb", close:true, tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {desc: "Document builder to be done", filesize: "0.9mb", close:true, tag:{isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    }
    ]
    
  return (
    <div  ref = {ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
            <Card key={index} data={item} reference = {ref}/>
        ))}
      </div>
    
  )
}

export default Foreground