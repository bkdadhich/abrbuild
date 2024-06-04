import React, { forwardRef } from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';

const predefinedColors = {
  Template1: '#F5F5F5',
  Template2: 'lightgray',
  Template3: '#F0FFF0',
  Template4: '#FFDAB9',
  Template5: 'lightgray',
  Template6: '#FFEBEF',
  Template7: '#FFEDCC',
};

const TemplateComponent = forwardRef(({ data, selectedTemplate, selectedFont, textSize, sectionSpacing, paragraphSpacing, lineSpacing, boxBgColor, isPreviewScreen }, ref) => {
  const getSizeClass = (value) => {
    if (value <= 1) return 'small';
    if (value === 2) return 'medium';
    return 'large';
  };

  let SelectedTemplateComponent;
  switch (selectedTemplate) {
    case 'Template1':
      SelectedTemplateComponent = Template1;
      break;
    case 'Template2':
      SelectedTemplateComponent = Template2;
      break;
    case 'Template3':
      SelectedTemplateComponent = Template3;
      break;
    case 'Template4':
      SelectedTemplateComponent = Template4;
      break;
    case 'Template5':
      SelectedTemplateComponent = Template5;
      break;
    case 'Template6':
      SelectedTemplateComponent = Template6;
      break;
    case 'Template7':
      SelectedTemplateComponent = Template7;
      break;
    default:
      SelectedTemplateComponent = Template1;
  }

  return (
    <div ref={ref} className='bg-white'>
      <SelectedTemplateComponent
        data={data}
        boxBgColor={boxBgColor}
        font={selectedFont}
        textSize={getSizeClass(textSize)}
        sectionSpacing={getSizeClass(sectionSpacing)}
        paragraphSpacing={getSizeClass(paragraphSpacing)}
        lineSpacing={lineSpacing}
        isPreviewScreen={isPreviewScreen}
        isTemplate1Previewing={isPreviewScreen} // Mapping isPreviewScreen to isTemplate1Previewing
      />
    </div>
  );
});

export default TemplateComponent;
