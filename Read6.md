# Problem Domain, Objects, and the DOM:

## Problem domain
![Domin](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBNxIk9CcNgBfeEgBnZlWmWBnSKTeHA9psw&usqp=CAU)

A problem domain is the area of expertise or application that needs to be examined to solve a problem.
A problem domain is simply looking at only the topics of an individual's interest, and excluding everything else.
For example, when developing a system to measure good practice in medicine, carpet drawings at hospitals would not be included in the problem domain.
In this example, the domain refers to relevant topics solely within the delimited area of interest: medicine. This points to a limitation of an overly specific, or overly bounded, problem domain. 
An individual may think they are interested in medicine and not interior design, but a better solution exists outside of the problem domain as it was initially conceived.
For example, when IDEO researchers noticed that patients in hospitals spent a huge amount of time staring at acoustic ceiling tiles, which "became a symbol of the overall ambiance: a mix of boredom and anxiety from feeling lost, uninformed, and out of control."

## Object Literal:
![Object](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFeGjdHERyED4VkSK2OPdHU-zilmziyIgQ&usqp=CAU)

In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.
Those values can be properties and functions. Here’s a snippet of an object literal with one property and one function.
var greeting = {
    fullname: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
};
Here’s the snippet to use the object we just created to log the fullname and call the greet function with the fullname value.

## Introduction to the DOM
![DOM](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7LOofqTdy2EBnd3OlGA0INuGcvmgADDSxQ&usqp=CAU)


The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. In this guide, we'll briefly introduce the DOM. We'll look at how the DOM represents an HTML or XML document in memory and how you use APIs to create web content and applications.

## What is the DOM?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
