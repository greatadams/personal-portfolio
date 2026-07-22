import type { Project } from "../types/types";

export const projects: Project[] = [
    {
        projectTitle:"taxiNow",
        projectSubtitle:"RIDE-HAILING PLATFORM - BRANDON, MB",
        projectParagraph:"A full ride-hailing platform built for Brandon's local cab companies, now in beta: real-time driver dispatch over WebSockets, live location broadcasting, driver heartbeat monitoring with automatic ghost-session cleanup, and race-condition-safe ride lifecycle handling. Deployed on Railway with an iOS TestFlight track.",
        projectStack:["Java · Spring Boot", "WebSockets", "PostgreSQL", "React Native", "Railway"],
        projectStatus: "IN BETA — TESTFLIGHT",
        projectPreview:["assets/taxinow-1.png", "assets/taxinow-2.png"]
    },


    {
        projectTitle:"RAMPSECURE",
        projectSubtitle:"RAMP SAFETY & EQUIPMENT CONTROL MAINTAIR AVIATION SERVICES",
        projectParagraph:"Equipment checkout and pre-use safety inspection system built and delivered for MaintAir Aviation Services. Backend built end to end — JWT authentication, checkout/check-in flows, inspection checklist logic, and a live equipment status dashboard. Delivered across two releases against the client's requirements.",
        projectStack:["Spring Boot", "JWT/RBAC", "React · TypeScript", "Vercel"],
        projectLink:["https://rampsecure.vercel.app/","https://github.com/greatadams/rampsecure"],
        projectStatus: "DELIVERED TO CLIENT",
        projectPreview:["assets/rampsecure-1.png", "assets/rampsecure-2.png"],
    },
    
    {
        projectTitle:"Event Ticketing Platform",
        projectSubtitle:"DISTRIBUTED SYSTEMS DEEP-DIVE MICROSERVICES",
        projectParagraph:"A distributed ticketing system built around the hard problem: many buyers, one seat, same moment. Pessimistic and optimistic locking for concurrent booking, gRPC for inter-service calls, Kafka for order events, Redis for seat-hold timers and caching.",
        projectStack:["Java · Spring Boot", "Kafka", "PostgreSQL", "gRPC", "Redis"],
        projectLink:["https://github.com/greatadams/ticketingApp"],
        projectStatus: "COMPLETE · LIVE",
       
    },

    
]

