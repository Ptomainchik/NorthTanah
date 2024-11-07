import { useEffect, useRef, useState } from "react";
import { AccordionDataType } from "../Accordion";
import classes from '../../OrcsKingdom.module.css'

export const AccordionItem = ({data, isOpen, btnOnClick,}: { data: AccordionDataType; isOpen: boolean; btnOnClick: () => void;}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (isOpen) {
        const contentEl = contentRef.current as HTMLDivElement;
  
        setHeight(contentEl.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);
  
    return (
      <li className={`classes.accordionItem ${isOpen ? 'active' : ''}`}>
        <h2 className={classes.accordionItemTitle}>
          <button className={classes.accordionItemBtn} onClick={btnOnClick}>
            {data.title}
          </button>
        </h2>
        <div className={classes.accordionItemContainer} style={{ height }}>
          <div ref={contentRef} className={classes.accordionItemContent}>
            {data.content}
          </div>
        </div>
      </li>
    );
  }