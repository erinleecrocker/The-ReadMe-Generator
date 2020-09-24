function generateMD(data){
    return `# ${Title}
    ![<ALT>](https://img.shields.io/badge/Licence-${license}-<COLOR>)
    
    <br /> 
    
    ## Description :

   ${Description}
    
    <br /> 
    <br /> 
    
    ## Table of Contents :
    ---
    - [**Installation Instructrions**](#Installation-Instructions)
    - [**Usage Information**](#Usage-Information)
    - [**License**](#Licence)
    - [**Contribution Guidelines**](#Contribution-Guidelines)
    - [**Test Instructions**](#Test-Instructions)
    - [**Questions**](#Questions)
    
    <br /> 
    <br /> 
    
    ## Instalation Instructions :
    ---
    ${Installation}    
    <br /> 
    
    ### Usage Information :
    ---
    ${Usage}
    
    <br /> 
    
    ### License :
    ---
    ${License} 
    
    <br /> 

    ### Contribution Guidelines :
    ---
    ${Contribution}    
    <br /> 
    
    ### Test Instructions :
    ---
    ${Test}    
    <br /> 
    
    ### Questions :
    ---
    * email : ${email} 
    * GitHub : http://www.github.com/${Username}`
};