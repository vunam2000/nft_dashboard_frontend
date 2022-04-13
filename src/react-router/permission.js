const Role = {
    SYSTEM_ADMIN: "SYSTEMADMIN",
    ADMIN: "ADMIN",
    MEMBER: "MEMBER",
}

const PermissionRoute = {
    OVERVIEW: {
        path: "/overview",
        title: "Overview",
        roles: "@all"
    },

    NOT_FOUND: {
        path: "/404",
        title: "Not Found"
    }
}

const AllRoute = Object.values(PermissionRoute).map(item => item.path)

export {
    Role,
    PermissionRoute,
    AllRoute
}