tailwind.config = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    md: "4rem",
                    xl: '4rem',
                    '2xl': '5rem',
                    '3xl': '6rem',
                },
                screens: {
                    'xsm': "370px",
                    'sm': "504px",
                    'md': "688px",
                    'lg': "864px",
                    'xl': "1088px",
                    "2xl": "1260px",
                    "3xl": "1392px"
                }
            },
            
            screens: {
                'xsm': "370px",
                'sm': "504px",
                'md': "688px",
                'lg': "864px",
                'xl': "1088px",
                "2xl": "1260px",
                "3xl": "1392px",
            },

            fontFamily: {
                'alata': ['Alata, sans-serif'],
                'josefin': ['Josefin, sans-serif'],
            },

            
         
            screens: {
                'xsm': "370px",
                'sm': "504px",
                'md': "688px",
                'lg': "864px",
                'xl': "1088px",
                "2xl": "1260px",
                "3xl": "1392px",
            },
            colors: {
                "bg-hero": "#F9FCFF"
            },

            fontSize: {
                nav: ['0.9375rem', {
                    lineHeight: '0.64rem',
                    fontWeight: '400',
                }],
                h1:[`4rem`, {
                    lineHeight: `5rem`,
                    fontWeight: `300`
                }],
                h2:[`2.5rem`, {
                    lineHeight: `3rem`,
                    fontWeight: `300`
                }],
                pMain:['0.9375rem', {
                    lineHeight: `1.3rem`,
                    fontWeight: `400`,
                }],
                pImg:['2rem', {
                    lineHeight: `2rem`,
                    fontWeight: `300`,
                }],
                xsmh1:[`2.5rem`, {
                    lineHeight: `4rem`,
                    fontWeight: `300`
                }],

            },

            padding: {
                'px': '320px',
                'pxB': '300px',
              },


              backgroundImage: {
                'bg-body': "url('/images/fon8.jpg')",
                'bg-form': "url('/images/dark2.jpg')",
                'bg-exit': "url('/images/exit.jpg')",


              },
              

        }
        
    }
}
