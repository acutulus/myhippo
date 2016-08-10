function getHippoPages($sce) {
return [
        {
            type:'fields',
            key:'fields',
            title:'Can you confirm this information?',
            subTitle:false,
            percent:20,
            fieldClasses:'col col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-8 col-md-6 col-sm-8 col-xs-4',
            fields: [
                {
                    type:'number',
                    key:'yearBuilt',
                    keyParent:'propertyData',
                    label:'YEAR BUILT',
                    placeholder:'YYYY',
                    min:1776,
                    max:(new Date()).getFullYear()+1,
                    show:'leadData.propertyData.yearBuilt',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4'
                },
                {
                    type:'number',
                    key:'squareFootage',
                    keyParent:'propertyData',
                    label:'SQUARE FOOTAGE',
                    placeholder:'sq ft',
                    min:50,
                    max:99999,
                    show:'leadData.propertyData.squareFootage',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4'
                },
                {
                    type:'select',
                    key:'numberOfFamilyUnits',
                    keyParent:'propertyData',
                    label:'FAMILY UNITS',
                    info:true,
                    infoModal: 'yearBuild',
                    placeholder:'Select',
                    show:'leadData.propertyData.numberOfFamilyUnits',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        '1':'1',
                        '2':'2',
                        '3':'3',
                        '4':'4',
                        '5+':'5 or more'
                    }
                },
                {
                    type:'select',
                    key:'numberOfStories',
                    keyParent:'propertyData',
                    label:'STORIES',
                    placeholder:'Select',
                    show:'leadData.propertyData.numberOfStories',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        '1':'1',
                        '2':'2',
                        '3':'3+'
                    }
                },
                {
                    type:'select',
                    key:'swimmingPool',
                    keyParent:'propertyData',
                    label:'SWIMMING POOL',
                    placeholder:'Select',
                    show:'leadData.propertyData.swimmingPool',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        true:'Yes',
                        false:'No'
                    }
                },
                {
                    type:'select',
                    key:'updatedElectric',
                    keyParent:'propertyData',
                    label:'UPDATED ELECTRICAL',
                    placeholder:'Select',
                    show:'leadData.propertyData.updatedElectric',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        true:'Yes',
                        false:'No'
                    }
                },
                {
                    type:'select',
                    key:'updatedHeating',
                    keyParent:'propertyData',
                    label:'HEATING/HVAC UPDATED',
                    placeholder:'Select',
                    show:'leadData.propertyData.updatedHeating',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        true:'Yes',
                        false:'No'
                    }
                },
                {
                    type:'select',
                    key:'updatedPlumbing',
                    keyParent:'propertyData',
                    label:'PLUMBING UPDATED',
                    placeholder:'Select',
                    show:'leadData.propertyData.updatedPlumbing',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        true:'Yes',
                        false:'No'
                    }
                },
                {
                    type:'select',
                    key:'roofType',
                    keyParent:'propertyData',
                    label:'ROOF TYPE',
                    show:'leadData.propertyData.roofType',
                    placeholder:'Select',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4',
                    options: {
                        'wood_shingles_or_shake':'Wood shingle or shake',
                        'architectural_shingles':'Architectural shingles',
                        'clay':'Clay tile',
                        'concrete_or_slate':'Concrete or Slate tile',
                        'steel_or_metal':'Steel or metal',
                        'flat_roof':'Flat roof of any kind',
                        'asphalt_fiberglass_other':'Asphalt / fiberglass shingles',
                        'other':'Other'
                    }
                },
                {
                    type:'number',
                    key:'roofMaintainedLast15Years',
                    keyParent:'propertyData',
                    label:'YEAR LAST MAINTAINED',
                    placeholder:'YYYY',
                    show:'leadData.propertyData.roofMaintainedLast15Years',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4'
                },

            ]
        },
        {
            type:'questions',
            percent:50,
            key:'questions',
            title:'Can you tell us more about your home?',
            subTitle:false,
            questions: [
                {
                    icon:'img/cake.svg',
                    iconAlt:'Cake',
                    info:true,
                    infoModal: 'yearBuild',
                    text: 'What year was your house built?',
                    type:'number',
                    key:'yearBuilt',
                    min:1776,
                    max:(new Date()).getFullYear()+1,
                    keyParent:'propertyData',
                    show:'true',
                    placeholder:'YYYY'
                },
                {
                    icon:'img/building.svg',
                    iconAlt:'Building',
                    info:true,
                    text: 'How many stories is your home?',
                    type:'select',
                    key:'numberOfStories',
                    keyParent:'propertyData',
                    placeholder:'Select',
                    show:'true',
                    options: {
                        '1':'1',
                        '2':'2',
                        '3':'3+'
                    }
                },
                {
                    icon:'img/facet.svg',
                    iconAlt:'Facet',
                    info:true,
                    text: 'Updated Plumbing?',
                    type:'toggle',
                    key:'updatedPlumbing',
                    show:'leadData.propertyData.yearBuilt < 1966',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/outlet.svg',
                    iconAlt:'Outlet',
                    info:true,
                    text: 'Updated Electrical?',
                    type:'toggle',
                    key:'updatedElectric',
                    show:'leadData.propertyData.yearBuilt < 1966',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/thermo.svg',
                    iconAlt:'Heating Updated',
                    info:true,
                    text: 'Updated Heating/HVAC',
                    type:'toggle',
                    key:'updatedHeating',
                    show:'leadData.propertyData.yearBuilt < 1966',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/earthquake.svg',
                    iconAlt:'Earthquake Retrofitted',
                    info:true,
                    text: 'Earthquake Retrofitted',
                    type:'toggle',
                    key:'earthquakeRetrofitted',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/roof.svg',
                    iconAlt:'Roof',
                    info:true,
                    infoModel: 'roofBuilt',
                    text: 'When was your roof constructed?',
                    type:'number',
                    key:'roofAge',
                    min:1776,
                    max:(new Date()).getFullYear()+1,
                    keyParent:'propertyData',
                    show:'true',
                    placeholder:'YYYY'
                },
                {
                    icon:'img/fiber-roof.svg',
                    iconAlt:'Roof Type',
                    info:true,
                    infoModel: 'roofType',
                    inputFull:true,
                    text: 'When was your roof constructed?',
                    type:'select',
                    key:'roofType',
                    show:'true',
                    options: [
                        {label:'Wood shingle or shake', value:'wood_shingles_or_shake'},
                        {label:'Architectural shingles', value:'architectural_shingles'},
                        {label:'Clay tile', value:'clay'},
                        {label:'Slate tile', value:'concrete_or_slate'},
                        {label:'Concrete tile', value:'concrete_or_slate'},
                        {label:'Steel or metal', value:'steel_or_metal'},
                        {label:'Flat roof of any kind', value:'flat_roof'},
                        {label:'Asphalt / fiberglass shingles', value:'asphalt_fiberglass_other'},
                        {label:'Other', value:'other'}
                    ],
                    keyParent:'propertyData',
                    placeholder:'Select'
                },
                {
                    icon:'img/calender.svg',
                    iconAlt:'Roof Maintained',
                    info:true,
                    infoModel: 'roofMaintained',
                    inputFull:true,
                    text: 'When was your roof last maintained?',
                    type:'number',
                    key:'roofMaintainedLast15Years',
                    keyParent:'propertyData',
                    show:'(leadData.propertyData.roofType == \'concrete_or_slate\' || leadData.propertyData.roofType == \'steel_or_metal\') && leadData.propertyData.roofBuilt < 2001',
                    placeholder:'YYYY'
                },
                {
                    icon:'img/stilts-house.svg',
                    iconAlt:'House on stilts',
                    info:true,
                    text: 'Is your house built on stilts?',
                    type:'toggle',
                    key: 'builtOnStilts',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/construction.svg',
                    iconAlt:'Construction',
                    info:true,
                    infoModel: 'homeConstruction',
                    inputFull:true,
                    text: 'Construction type of home',
                    type:'select',
                    key:'constructionType',
                    keyParent:'propertyData',
                    show:'true',
                    options: {
                        'concrete':'Concrete',
                        'frame':'Frame',
                        'masonry':'Masonry',
                        'steel':'Steel',
                    },
                    placeholder:'Select'
                },
                {
                    icon:'img/ruler.svg',
                    iconAlt:'Square Footage',
                    info:true,
                    infoModel: 'sqFoot',
                    inputFull:true,
                    text: 'Square footage of home',
                    type:'text',
                    key:'squareFootage',
                    keyParent:'propertyData',
                    show:'true',
                    placeholder:'sq ft'
                },
            ]
        },
        {
            type:'tiles',
            key:'overallQuality',
            noContinue:true,
            percent:60,
            title:'What is your homes overall quality?',
            subTitle:$sce.trustAsHtml('This is used to estimate the cost of rebuilding your home'),
            footer:$sce.trustAsHtml('<a href="#"><span><img src="img/info.svg" alt="More Info"></span>How are these different?</a>'),
            tiles: [
                {
                    classes:'col col-lg-2 col-lg-offset-2 col-md-2 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/house-standard.svg',
                    iconAlt:'Standard Condition',
                    title:'Standard',
                    key:'buildingQuality',
                    keyParent:'propertyData',
                    value:'standard',
                    body:$sce.trustAsHtml('This may include:<br>Hardwood floors, Hardwood cabinets & Moderate materials'),
                    percent:'70% choose this',
                    footer:false,
                    color:'#328DF9'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/house-premium.svg',
                    iconAlt:'Premium Condition',
                    title:'Premium',
                    key:'buildingQuality',
                    keyParent:'propertyData',
                    value:'premium',
                    body:$sce.trustAsHtml('This may include:<br>Built-in bookshelves, Glass-paned cabinets & Good materials'),
                    percent:'20% choose this',
                    footer:false,
                    color:'#F2654E'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/house-luxury.svg',
                    iconAlt:'Luxury Condition',
                    title:'Luxury',
                    key:'buildingQuality',
                    keyParent:'propertyData',
                    value:'luxury',
                    body:$sce.trustAsHtml('This may include:<br>Marble countertops, Movie theater & Superior materials'),
                    percent:'10% choose this',
                    footer:false,
                    color:'#7C5BF4'
                },
            ]
        },
        {
            type:'fields',
            key:'yourself',
            percent:80,
            title:'Can you tell us about yourself?',
            subTitle:false,
            underTitle:$sce.trustAsHtml('To give an accurate quote, we may use information such as credit and prior insurance history provided by you or 3rd parties. By continuing, you agree to our <a>Terms of Use.</a>'),
            fieldClasses:'col col-lg-offset-2 col-md-offset-1 col-sm-offset-1 col-lg-6 col-md-6 col-sm-6 col-xs-4',
            footer:$sce.trustAsHtml('<span><img src="img/info.svg" alt="More Info"></span>You will be able to retrieve your quote anytime using this email address.'),
            fields: [
                {
                    type:'text',
                    key:'firstName',
                    keyParent:'personalInformation',
                    label:'FIRST NAME',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4 abt-pg',
                    placeholder:'',
                    show:'true',
                    required: true
                },
                {
                    type:'text',
                    key:'middleName',
                    keyParent:'personalInformation',
                    label:'MIDDLE (OPTIONAL)',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4 abt-pg',
                    show:'true',
                    placeholder:'',
                },
                {
                    type:'text',
                    key:'lastName',
                    keyParent:'personalInformation',
                    label:'LAST NAME',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4 abt-pg',
                    placeholder:'',
                    show:'true',
                    required: true
                },
                {
                    type:'date',
                    key:'dateOfBirth',
                    keyParent:'personalInformation',
                    label:'DATE OF BIRTH',
                    classes:'col col-lg-2 col-md-2 col-sm-3 col-xs-4 abt-pg',
                    format:'MM / DD / YY',
                    placeholder:'MM / DD / YY',
                    show:'true',
                    required: true
                },
                {
                    type:'select',
                    key:'purchaseDate',
                    keyParent:'propertyData',
                    label:'HOME PURCHASE DATE',
                    classes:'col col-lg-4 col-md-4 col-sm-3 col-xs-4 abt-pg',
                    placeholder:'Select',
                    show:'true',
                    options: {
                        '1':'Over 1 year ago',
                        '2':'In the past 12 months',
                        '3':'In the next 3 months'
                    },
                    required: true
                },
                {
                    type:'email',
                    key:'email',
                    keyParent:'personalInformation',
                    label:'EMAIL ADDRESS',
                    classes:'col col-lg-6 col-md-6 col-sm-3 col-xs-4 abt-pg',
                    placeholder:'',
                    show:'true',
                    required: true
                },
            ]
        },
        {
            type:'prelim',
            key:'prelim',
            apiCall:'quotequick',
            purple:true
        },
        {
            type:'tiles',
            key:'tiles2',
            percent: 30,
            noContinue:true,
            title:'How often will you be here?',
            subTitle:'quote',
            footer:$sce.trustAsHtml('<a href="#"><span><img src="img/info.svg" alt="More Info"></span>How are these different?</a>'),
            tiles: [
                {
                    classes:'col col-lg-2 col-lg-offset-2 col-md-2 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/calender.svg',
                    iconAlt:'Calender',
                    title:'All year round',
                    key:'residenceType',
                    keyParent:'propertyData',
                    value:'primary',
                    body:$sce.trustAsHtml('This is your primary residence'),
                    footer:false,
                    color:'#F2654E'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/suitcase.svg',
                    iconAlt:'Seasonal',
                    title:'Sometimes',
                    key:'residenceType',
                    keyParent:'propertyData',
                    value:'secondary',
                    body:$sce.trustAsHtml('This is my vacation or seasonal home.'),
                    footer:false,
                    color:'#328DF9'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/ghost.svg',
                    iconAlt:'Vacant',
                    title:'Never',
                    key:'residenceType',
                    keyParent:'propertyData',
                    value:'vacant',
                    body:$sce.trustAsHtml('This home will be vacant or rented out.'),
                    footer:false,
                    color:'#7C5BF4'
                },
            ]
        },
        {
            type:'tiles',
            key:'tiles3',
            percent: 40,
            noContinue:true,
            title:'Do you have a fence around your home & pool?',
            subTitle:$sce.trustAsHtml('Your quote so far is <span style="font-weight: bold;">$65/mo</span>'),
            footer:$sce.trustAsHtml('<a href="#"><span><img src="img/info.svg" alt="More Info"></span>How are these different?</a>'),
            tiles: [
                {
                    classes:'col col-lg-2 col-lg-offset-3 col-md-2 col-md-offset-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/fr-pool.svg',
                    iconAlt:'Free Range Pool',
                    title:'No',
                    key:'pool',
                    keyParent:'propertyData',
                    value:'no',
                    body:$sce.trustAsHtml('I have a swimming pool, but no fence around my house.'),
                    footer:false,
                    color:'#F2654E'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 col-xs-4',
                    icon:'img/fence.svg',
                    iconAlt:'Fence',
                    title:'Yes',
                    key:'pool',
                    keyParent:'propertyData',
                    value:'yes',
                    body:$sce.trustAsHtml('I have a pool and a fence around our property.'),
                    footer:false,
                    color:'#328DF9'
                },
            ]
        },
        {
            type:'questions',
            key:'questions2',
            percent: 50,
            title:'Do any of these apply to you?',
            subTitle:'quote',
            questions: [
                {
                    icon:'img/treehouse.svg',
                    iconAlt:'Treehouse',
                    info:true,
                    text: 'Unconventional Home',
                    type:'toggle',
                    key: 'unusualHome',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/construction.svg',
                    iconAlt:'Under Construction',
                    info:true,
                    text: 'Under construction',
                    type:'toggle',
                    key:'houseUnderConstruction',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/burner.svg',
                    iconAlt:'Burner',
                    info:true,
                    text: 'Unusual or no heat',
                    type:'toggle',
                    key:'unusualHeating',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/fire.svg',
                    iconAlt:'Additional Heat',
                    info:true,
                    text: 'Additional heat source',
                    type:'toggle',
                    key:'woodStovePelletCoalNoHeat',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/heart.svg',
                    iconAlt:'Policy Breakups',
                    info:true,
                    text: 'Home policy breakups',
                    type:'toggle',
                    key:'previousPolicyCancelled',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/suitcase-p.svg',
                    iconAlt:'Business',
                    info:true,
                    text: 'Business on site',
                    type:'toggle',
                    key:'businessOnPremises',
                    show:'true',
                    keyParent:'propertyData'
                },
                {
                    icon:'img/butler.svg',
                    iconAlt:'Butler',
                    info:true,
                    text: 'Employee(s) on site',
                    type:'toggle',
                    key:'numOfInservantEmployees',
                    show:'true',
                    keyParent:'propertyData'
                },
            ]
        },
        {
            type:'tiles',
            key:'tiles4',
            title:'Homes with these get a discount',
            subTitle:$sce.trustAsHtml('Your quote so far is <span style="font-weight: bold;">$65/mo</span>'),
            multi:true,
            percent: 60,
            footer:$sce.trustAsHtml('<a href="#"><span><img src="img/info.svg" alt="More Info"></span>How are these different?</a>'),
            tiles: [
                {
                    classes:'col col-lg-2 col-lg-offset-1 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/fire-alarm.svg',
                    iconAlt:'Central Fire Alarm',
                    key:'fireAlarm',
                    keyParent:'propertyData',
                    title:'Central fire alarm',
                    body:$sce.trustAsHtml('A fire alarm which notifies the fire station.'),
                    footer:false,
                    color:'#7C5BF4'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/local-alarm.svg',
                    iconAlt:'Local Fire Alarm',
                    key:'fireAlarm',
                    keyParent:'propertyData',
                    title:'Local fire alarm',
                    body:$sce.trustAsHtml('A fire alarm which doesn’t notify the fire station.'),
                    footer:false,
                    color:'#19DD84'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/extinguisher.svg',
                    iconAlt:'Fire Extinguisher',
                    key:'fireExt',
                    keyParent:'propertyData',
                    title:'Fire extinguisher',
                    body:$sce.trustAsHtml('Homes with fire extinguishers get a discount.'),
                    footer:false,
                    color:'#F2654E'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/sprinkler.svg',
                    iconAlt:'Sprinkler System',
                    key:'sprinklers',
                    keyParent:'propertyData',
                    title:'Sprinkler system',
                    body:$sce.trustAsHtml('Homes with sprinkler systems get a discount.'),
                    footer:false,
                    color:'#328DF9'
                },
            ]
        },
        {
            type:'tiles',
            key:'tiles5',
            percent: 70,
            title:'These will also help you save!',
            subTitle:$sce.trustAsHtml('Your quote so far is <span style="font-weight: bold;">$65/mo</span>'),
            multi:true,
            footer:$sce.trustAsHtml('<a href="#"><span><img src="img/info.svg" alt="More Info"></span>How are these different?</a>'),
            tiles: [
                {
                    classes:'col col-lg-2 col-lg-offset-1 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/alarm.svg',
                    iconAlt:'Burglar Alarm',
                    key:'burglarAlarm',
                    keyParent:'propertyData',
                    value:'central',
                    title:'Central burglar alarm',
                    body:$sce.trustAsHtml('A burglar alarm which notifies the police station'),
                    footer:false,
                    color:'#F2654E'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/burglar.svg',
                    iconAlt:'Burglar',
                    key:'burglarAlarm',
                    keyParent:'propertyData',
                    value:'local',
                    title:'Local burglar alarm',
                    body:$sce.trustAsHtml('A burglar alarm which doesn’t notify the police station.'),
                    info:true,
                    infoModal: 'localBurglarAlarm',
                    footer:false,
                    color:'#7C5BF4'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg',
                    icon:'img/gated.svg',
                    iconAlt:'Gated Community',
                    key:'gatedCommunity',
                    keyParent:'propertyData',
                    title:'Gated Community',
                    body:$sce.trustAsHtml('A fenced-in community'),
                    footer:false,
                    color:'#328DF9'
                },
                {
                    classes:'col col-lg-2 col-md-2 col-sm-6 col-sm-offset-1 save-pg paperless',
                    icon:'img/paperless.svg',
                    iconAlt:'Paperless Billing',
                    key:'goPaperless',
                    keyParent:'propertyData',
                    title:'A Preference for Paperless Billing',
                    body:$sce.trustAsHtml('Recieve your bills via e-mail.'),
                    footer:false,
                    color:'#19DD84'
                },
            ]
        },
        {
            type: 'questions',
            key: 'questions3',
            percent: 80,
            title: 'Can we run a claims & credit check?',
            subTitle:$sce.trustAsHtml('Your quote so far is <span style="font-weight: bold;">$65/mo</span>'),
            subTitle: false,
            questions: [
                {
                    type: 'text',
                    key: 'previousAddress',
                    keyParent: 'personalInformation',
                    icon:'img/calender.svg',
                    info: true,
                    inputFull:true,
                    text: 'Where did you live most in the last year?',
                    classes: 'col col-lg-6 col-md-6 col-sm-3 col-xs-4',
                    show:'true',
                    placeholder: ''
                },
                {
                    type: 'select',
                    key: 'homeClaims',
                    icon: 'img/house-error.svg',
                    info: true,
                    inputFull:true,
                    text: 'Any home claims in the last 5 years?',
                    classes: 'col col-lg-6 col-md-6 col-sm-3 col-xs-4',
                    show:'true',
                    placeholder: 'No claims',
                    options: {
                        '1':'1',
                        '2':'2',
                        '3+':'3'
                    }
                },
            ]
        },
        {
            type: 'claims',
            key: 'claims',
            percent: 90
        },
        {
            type:'finalquote',
            key:'finalquote',
            apiCall:'finalquote',
            purple:true
        },
        {
            type: 'checkout',
            key: 'checkout'
        },
        {
            type: 'confirmation',
            key: 'confirmation'
        }
    ];}