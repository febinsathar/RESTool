import React, { useState } from "react";

import PropTypes from "prop-types";

import './accordion.scss'

import AccordionSection from "./accordionSection.comp";


interface IProps {
  children: any
  allowMultipleOpen: boolean
}


const Accordion = (props: IProps) => {

  const { children, allowMultipleOpen } = props;

  const [openSections, setOpenSections] = useState<any>({});

  children.forEach((child: { props: { isOpen: boolean; label: string }; }) => {
    if (child.props.isOpen) {
      openSections[child.props.label] = true;
    }
  });

  const onClickItem = (label: string) => {
    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      setOpenSections({
        ...openSections,
        [label]: !isOpen
      });
    } else {
      setOpenSections({
        [label]: !isOpen
      });
    }
  };

  return (
    <div>
      {children.map((child: any) => (
        <AccordionSection
          key={child.props['data-label']}
          isOpen={!!openSections[child.props['data-label']]}
          label={child.props['data-label']}
          onClickItem={onClickItem}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired
};

export default Accordion;
