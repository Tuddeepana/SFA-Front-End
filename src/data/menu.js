export var menuItems={
  "data": [
    {
      "headTitle1": "SFA",
      "headTitle2": "Dashboards,Widgets & Layout.",
      "type": "headtitle"
    },
    {
      "title": "Dashboard",
      "icon": "stroke-home",
      "iconf":"fill-home",
      "type": "sub",
      "badgeType": "light-primary",
      "badgeValue": "1",
      "active": false,
      "children": [
        {
          "path": "/",
          "title": "Overview",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Employee",
      "icon": "stroke-widget",
      "iconf":"fill-widget",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/widgets/general",
          "title": "Employee-List",
          "type": "link",
          "active":false
        },
        {
         "path": "/employee/add",
         "title": "Add Employee",
         "type": "link",
          "active":false
           },
        {
          "path": "/employee/attendance",
          "title": "Employee-Attendance",
          "type": "link",
          "active":false
        },

         {
           "path": "/employee/attendance-sheet",
           "title": "Attendance-Sheet",
           "type": "link",
           "active":false
         },
        {
          "path": "/widgets/chart",
          "title": "Employee-Task",
          "type": "link",
           "active":false
        },

      ]
    },
    {
      "title": "Customer",
      "icon": "stroke-user",
      "iconf":"fill-layout",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/pageLayout/boxed",
          "title": "Customer-List",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/RTL",
          "title": "Add Product",
          "type": "link",
          "active":false
        }
      ]
    },
    {
          "title": "Product",
          "icon": "stroke-box",
          "iconf":"fill-layout",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/pageLayout/boxed",
              "title": "Product-List",
              "type": "link",
              "active":false
            },
            {
              "path": "/pageLayout/RTL",
              "title": "Add Customer",
              "type": "link",
              "active":false
            }
          ]
        },

        {
                  "title": "Suplier",
                  "icon": "stroke-box",
                  "iconf":"fill-layout",
                  "type": "sub",
                  "active": false,
                  "children": [
                    {
                      "path": "/pageLayout/boxed",
                      "title": "Product-List",
                      "type": "link",
                      "active":false
                    },
                    {
                      "path": "/pageLayout/RTL",
                      "title": "Add Customer",
                      "type": "link",
                      "active":false
                    }
                  ]
                },
    {
      "headTitle1": "Applications",
      "headTitle2": "Ready to use apps",
      "type": "headtitle"
    },
    {
      "title": "project",
      "icon": "stroke-project",
      "iconf":"fill-project",
      "type": "sub",
      "badgeType": "light-secondary",
      "badgeValue": "New",
      "active": false,
      "children": [
        {
          "path": "/project/projectlist",
          "title": "Project list",
          "type": "link",
          "active": false
        },
        {
          "path": "/project/create-project",
          "title": "Create new",
          "type": "link",
          "active": false
        }
      ]
    },
    {
      "path": "/app/filemanager",
      "title": "File manager",
      "icon": "stroke-file",
      "iconf":"fill-file",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/kanban",
      "title": "Kanban Board",
      "icon": "stroke-board",
      "iconf":"fill-board",
      "type": "link",
      "badgeType": "light-danger",
      "badgeValue": "Latest",
      "active": false
    },
    {
      "title": "Ecommerce",
      "icon": "stroke-ecommerce",
      "iconf":"fill-ecommerce",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/ecommerce/product",
          "title": "Product",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/product/page/1",
          "title": "Product Page",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/product/list",
          "title": "Product List",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/payment/details",
          "title": "Payment Details",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/order/history",
          "title": "Order Details",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/invoice",
          "title": "Invoice",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/cart",
          "title": "Cart",
          "type": "link",
          "active":false
        },
       
        {
          "path": "/ecommerce/wishlist",
          "title": "Wishlist",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/checkout",
          "title": "Checkout",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/pricing",
          "title": "Pricing",
          "type": "link",
          "active":false
        }
      
      
      ]
    },
    {
      
      "title": "Email",
      "icon": "stroke-email",
      "iconf":"fill-email",
      "type": "sub",
      "active":false,
      "children": [
        
          {
            "path": "/email/readMail",
            "title" :"Email App",
            "type" : "link",
            "active":false
        
          },
          {
            "path": "/email/compose",
            "title" :"Email Compose",
            "type" : "link",
            "active":false
        
          }
      ]
    },
    {
      "title": "chat",
      "icon": "stroke-chat",
      "iconf":"fill-chat",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/app/chat",
          "title": "Chat App",
          "type": "link",
          "active":false
        },
        {
          "path": "/app/videochat",
          "title": "Video Chat",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Users",
      "icon": "stroke-user",
      "iconf":"fill-user",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/users/profile",
          "title": "Users Profile",
          "type": "link",
          "active":false
        },
        {
          "path": "/users/edit",
          "title": "Users Edit",
          "type": "link",
          "active":false
        },
        {
          "path": "/users/cards",
          "title": "Users Cards",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/app/bookmark",
      "title": "Bookmark",
      "icon": "stroke-bookmark",
      "iconf":"fill-bookmark",
      "type": "link",
      "bookmark": true
    },
    {
      "path": "/app/contact",
      "title": "Contacts",
      "icon": "stroke-contact",
      "iconf":"fill-contact",
      "type": "link",
      "active": false

    },
    {
      "path": "/app/task",
      "title": "Tasks",
      "icon": "stroke-task",
      "iconf":"fill-task",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/calendar",
      "title": "Calendar",
      "icon": "stroke-calendar",
      "iconf":"fill-calender",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/socialPage",
      "title": "Social App",
      "icon": "stroke-social",
      "iconf":"fill-social",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/todo",
      "title": "To-Do",
      "icon": "stroke-to-do",
      "iconf":"fill-to-do",
      "type": "link",
      "active": false
    },

    {
      "path": "/pages/search",
      "title": "Search results",
      "icon": "stroke-search",
      "iconf":"fill-search",
      "type": "link",
      "active": false
    },
    {
      "headTitle1": "Forms & Table",
      "headTitle2": "Ready to use froms & tables ",
      "type": "headtitle"
    },
    {
      "title": "Forms",
      "icon": "stroke-form",
      "iconf":"fill-form",
      "type": "sub",
      "active": false,
      "children": [
        {
          "title": "Form Controls",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/validation",
              "title": "Form Validation",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/inputs",
              "title": "Base Inputs",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/checkbox-radio",
              "title": "Checkbox & Radio",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/input-groups",
              "title": "Input Groups",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/mega-options",
              "title": "Mega Options",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Form Widgets",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/datepicker",
              "title": "Datepicker",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/select2",
              "title": "Select2",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/switch",
              "title": "Switch",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/touchspin",
              "title": "Touchspin",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/typeahead",
              "title": "Typeahead",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/clipboard",
              "title": "Clipboard",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Form Layout",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/defaultforms",
              "title": "Default Forms",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard1",
              "title": "Form Wizard1",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard2",
              "title": "Form Wizard2",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard3",
              "title": "Form Wizard3",
              "type": "link",
              "active":false
            }
       
          ]
        }
       
      ]
    },
    {
      "title": "Tables",
      "icon": "stroke-table",
      "iconf":"fill-table",
      "type": "sub",
      "active": false,
      "children": [
        {
          "title": "Bootstrap Tables",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/table/basic",
              "title": "Basic Tables",
              "type": "link",
              "active":false
            },
            
            {
              "path": "/table/tableComponent",
              "title": "Table Components",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Data Tables",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/datatable-basic",
              "title": "Basic Init",
              "type": "link",
              "active":false
            }
         
          ]
        }
     
      ]
    },
    {
      "headTitle1": "Components",
      "headTitle2": "UI Components & Elements",
      "type": "headtitle"
    },
    {
      "title": "UI kits",
      "icon": "stroke-ui-kits",
      "iconf":"fill-ui-kits",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/uikits/typography",
          "title": "Typography",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/avatars",
          "title": "Avatars",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/helper-classes",
          "title": "Helper Classes",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/grid",
          "title": "Grid",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/tag-pills",
          "title": "Tag & Pills",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/progress-bar",
          "title": "Progressbar",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/modal",
          "title": "Modal",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/alert",
          "title": "Alert",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/popover",
          "title": "Popover",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/tooltip",
          "title": "Tooltip",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/loader",
          "title": "Spinners",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/dropdown",
          "title": "Dropdown",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/accordion",
          "title": "Accordian",
          "type": "link",
          "active":false
        },
        {
          "title": "Tabs",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/uikits/bootstraptab",
              "title": "Bootstrap Tabs",
              "type": "link",
              "active":false
              
            },
            {
              "path": "/uikits/linetab",
              "title": "Line Tabs",
              "type": "link",
              "active":false
              
            }
          ]
        },
        {
          "path": "/uikits/box-shadow",
          "title": "Shadow",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/lists",
          "title": "Lists",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Bonus UI",
      "icon": "stroke-bonus-kit",
      "iconf":"fill-bonus-kit",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/advance/scrollable",
          "title": "Scrollable",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/treeView",
          "title": "Tree View",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/notify",
          "title": "Bootstrap Notify",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/rating",
          "title": "Rating",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/dropzone",
          "title": "Dropzone",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/tour",
          "title": "Tour",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/sweetalert",
          "title": "SweetAlert2",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/animatedModal",
          "title": "Animated Modal",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/owlCarousel",
          "title": "Owl Carousel",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/ribbons",
          "title": "Ribbons",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/pagination",
          "title": "Pagination",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/breadcrumb",
          "title": "Breadcrumb",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/range-slider",
          "title": "Range Slider",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/image-cropper",
          "title": "Image Cropper",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/sticky",
          "title": "Sticky",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/basicCard",
          "title": "Basic Card",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/creativeCard",
          "title": "Creative Card",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/TabbedCard",
          "title": "Tabbed Card",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/DraggableCard",
          "title": "Draggable Card",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/timeline1",
          "title": "Timeline",
          "type": "link",
          "active":false
          
        }

      ]
    },
 
    {
      "title": "Builders",
      "icon": "stroke-builders",
      "iconf":"fill-builders",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/builder/form1",
          "title": "Form Builder1",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/builder/form2",
          "title": "Form Builder2",
          "type": "link",
          "active":false
          
        }
      
      ]
    },
    {
      "title": "Animation",
      "icon": "stroke-animation",
      "iconf":"fill-animation",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/animation/animate",
          "title": "Animate",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/animation/scroll",
          "title": "Scroll Reveal",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/animation/AOS",
          "title": "AOS animation",
          "type": "link",
          "active":false
          
        },
       
        {
          "path": "/animation/wow",
          "title": "Wow Animation",
          "type": "link",
          "active":false
          
        } ,
        {
          "path": "/animation/tilt",
          "title": "tilt Animation",
          "type": "link",
          "active":false
        } 
      ]
    },
    {
      "title": "Icons",
      "icon": "stroke-icons",
      "iconf":"fill-icons",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/icons/flag",
          "title": "Flag icon",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/fontawesome",
          "title": "Fontawesome Icon",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/ico",
          "title": "Ico Icon",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/themify",
          "title": "Themify Icon",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/feather_icon",
          "title": "Feather Icon",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/whether",
          "title": "Whether Icon",
          "iconf":"",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Buttons",
      "icon": "stroke-button",
      "iconf":"fill-botton",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/buttons/default",
          "title": "Default Style",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/flat",
          "title": "Flat Style",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/edge",
          "title": "Edge Style",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/raised",
          "title": "Raised Style",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/group",
          "title": "Button Group",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Charts",
      "icon": "stroke-charts",
      "iconf":"fill-charts",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/chart/google",
          "title": "Google Chart",
          "type": "link",
          "active":false
        },
        {
          "path": "/chart/chartist",
          "title": "Chartist",
          "type": "link",
          "active":false
        },
        {
          "path": "/chart/apexChart",
          "title": "ApexChart",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Pages",
      "headTitle2": "All Neccesory Pages Added",
      "type": "headtitle"
    },
    {
      "path": "/pages/sample-page",
      "title": "Sample page",
      "icon": "stroke-sample-page",
      "iconf":"fill-sample-page",
      "type": "link",
      "active":false
    },
    {
      "title": "Error Page",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/error-400",
          "title": "Error 400",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-401",
          "title": "Error 401",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-403",
          "title": "Error 403",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-404",
          "title": "Error 404",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-500",
          "title": "Error 500",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-503",
          "title": "Error 503",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Authentication",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/auth/login",
          "title": "Login Simple",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/one",
          "title": "Login With Image",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/two",
          "title": "Login With Image 2",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/validate",
          "title": "Login With Validation",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/tooltip",
          "title": "Login With Tooltip",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/sweetalert",
          "title": "Login With Sweetalert",
          "type": "link",
          "active":false
        },
        {
          "path": "/auth/register",
          "title": "Register Simple",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/register/image",
          "title": "Register with Image",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/register/image2",
          "title": "Register with image 2",
          "type": "link",
          "active":false
        },
  
        {
          "path": "/authentication/unlockuser",
          "title": "Unlock User",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/forgetpassword",
          "title": "Forget Password",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/resetpassword",
          "title": "Reset Password",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/maintenance",
          "title": "Maintenance",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Coming Soon",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/comingsoon/comingsoon-simple",
          "title": "Coming Simple",
          "type": "link",
          "active":false
        },
        {
          "path": "/comingsoon/comingsoon-image",
          "title": "Coming with Bg Image",
          "type": "link",
          "active":false
        },
        {
          "path": "/comingsoon/comingsoon-video",
          "title": "Coming with Bg video",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Miscellaneous",
      "headTitle2": "Bouns pages & apps",
      "type": "headtitle"
    },
    {
      "title": "Gallery",
      "icon": "stroke-gallery",
      "iconf":"fill-gallery",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/gallery/grid-gallery",
          "title": "Grid Gallery",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-desc",
          "title": "Grid Gallery With Desc",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-masonary",
          "title": "Masonary Gallery",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-masonary-desc",
          "title": "Masonary Gallery Desc",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/hover-effect",
          "title": "Hover Effect",
          "type": "link",
          "active":false
        }
      ]
    },
   

    {
      "title": "Blog",
      "icon": "stroke-blog",
      "iconf":"fill-blog",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/blog/details",
          "title": "Blog Details",
          "type": "link",
          "active":false
        },
        {
          "path": "/blog/single",
          "title": "Blog Single",
          "type": "link",
          "active":false
        },
        {
          "path": "/blog/add",
          "title": "Add Blog",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/pages/faq",
      "title": "FAQ",
      "icon": "stroke-faq",
      "iconf":"fill-faq",
      "type": "link",
      "active":"false"
    },
    {
      "title": "Job Search",
      "icon": "stroke-job-search",
      "iconf":"fill-job-search",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/job/card",
          "title": "Card View",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/list",
          "title": "List View",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/details/1",
          "title": "Job Details",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/apply/1",
          "title": "Apply",
          "type": "link",
          "active":false
          
        }
      ]
    },
    {
      "title": "Learning",
      "icon": "stroke-learning",
      "iconf":"fill-learning",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/learning/list",
          "title": "Learning List",
          "type": "link",
          "active":false
        },
        {
          "path": "/learning/details/1",
          "title": "Detailed Course",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Maps",
      "icon": "stroke-maps",
      "iconf":"fill-maps",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/maps/vue-google-maps",
          "title": "Google Maps",
          "type": "link",
          "active":false
        },
        {
          "path": "/maps/vue-leaflet-maps",
          "title": "Vue Leaflet",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "editor",
      "icon": "stroke-editors",
      "iconf":"fill-editors",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/editor/simple-editor",
          "title": "Simple Editor",
          "icon": "box",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/editor/ck-editor",
          "title": "Ck Editor",
          "icon": "box",
          "iconf":"",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/knowledgebase/knowledgebase",
      "title": "Knowledgebase",
      "icon": "stroke-knowledgebase",
      "iconf":"fill-knowledgebase",
      "type": "link",
      "active":false
    },
    {
      "path": "/pages/support",
      "title": "Support Ticket",
      "icon": "stroke-support-tickets",
      "iconf":"fill-support-tickets",
      "type": "link",
      "active":false
    }
  ]
}