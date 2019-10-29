import './button-component.css'
import React from 'react'

export const Button = ({children, ...props}) => <button className="button" {...props}>{children}</button>;

