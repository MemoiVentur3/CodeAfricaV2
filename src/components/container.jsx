import React from "react"


const ContainLayout = ({ children, ...props }) => {
    return (
        <div
            mx="auto"
            maxW="10xl"
            px={{ base: '4', md: '8', lg: '12' }}
            {...props}
          >
            {children}
          </div>
    )
}

export default ContainLayout