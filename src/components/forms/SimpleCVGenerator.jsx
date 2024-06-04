import React, { forwardRef } from 'react';
import TemplateComponent from './templateComponent';

const SimpleCVGenerator = forwardRef(({ data, selectedTemplate,showRedCircle }, ref) => {
  return (
    <div className="w-full lg:w-full p-1 " >
      <TemplateComponent
        ref={ref}
        data={data}
        selectedTemplate={selectedTemplate}
        showRedCircle={showRedCircle}
      />
    </div>
  );
});

export default SimpleCVGenerator;
