function getHippoModals($sce) {
return {
    yearBuild: {
        title:'asdf',
        subTitle:'asdf',
          hr: false,
    },
    test: {
        title:'This is a modal',
        subTitle:'Modal test',
        icon:'calender.svg',
        hr: true,
        bodyType:'basic',
        body:$sce.trustAsHtml('<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.</p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>')
    },
    localBurglarAlarm: {
        title:'Local burglar alarm',
        subTitle:'',
        icon:'calender.svg',
        hr: true,
        bodyType:'basic',
        body:$sce.trustAsHtml('<p>This alarm can only be heard by those inside the home and within a short distance of the home. You may need to provide documentation validating this.</p>')
    },
    familyUnits: {
        title:'Family units',
        subTitle:'',
        icon:'calender.svg',
        hr: true,
        bodyType:'basic',
        body:$sce.trustAsHtml('<p>This is the number of individual family units within your property.</p>')
    },
    roof: {
        title:'Roofs',
        subTitle:'Everything you need to know:',
        snapshot:'All roofs are not created equal. They have different lifespans and require differentlevels of care. User this guide to determin your roof\'s construction materials',
        icon:'roof.svg',
        hr: true,
        bodyType:'list',
        list:[
        {
            icon:'asdf.svg',
            title:'Slate tile',
            body:'Slate has two lines of breakability ...',
            rightLabel:'10% choose this'
        },
        {
            icon:'asdf.svg',
            title:'Concrete tile',
            body:'A modern roofing material, which is made from ...',
            rightLabel:'60% choose this'
        }]
    },
    quote: {
        title:'Customizing your coverage',
        subTitle:'So you\'re a home insurance pro? Then have at it!',
        snapshot:'',
        icon:'roof.svg',
        hr: true,
        bodyType:'custom',
        body:'<mh-customize></mh-customize>'
    },
    buildingQuality: {
        title:'Building Quality',
        subTitle:'Everything you need to know:',
        icon:'roof.svg',
        bodyType:'tabs',
        tabsTitle:'Building Types',
        tabs:[
            {
                label:'House Shape',
                html:$sce.trustAsHtml('')
            },
            {
                label:'House Roof',
                html:$sce.trustAsHtml('')
            },
        ]
    },
    mortgage: {
        title:'Add Mortgage Info',
        underTitle:'Need evidence of insurance?',
        icon:'roof.svg',
        hr: true,
        bodyType:'custom',
        body:'<mh-customize></mh-customize>'
    },

};}
