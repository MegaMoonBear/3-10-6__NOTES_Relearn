# 3-10-6__NOTES_Relearn

**Backend**: Logic, functions, etc. user cannot see 
**Frontend**: User interaction (UX, UI, etc.) and how developer handles

**Route** connects the front- and back-ends
- value as http:// or https://
- Uses FETCH (link)(route) [1^]

(limited JS in Module 3)

React project - Structure/folders
- Public for projects - Accessible resources, limited resources - public assets
- SRC - Visible

**Create new React**
- VSC >> View >> Terminal (pane)
- Select "GitBash" (select with "+^" button)
- Type: npm create vite@latest                                         /*bring in resources*/
- enter/return
- Select... React framework... JavaScript variant... Install with npm and start now? YES

**useState**
- function
- useState[variable,setVariable]
- setVariable as function to make "variable" change value 

**useEffect**
- allow functions to happen and make changes (without need to refresh)
- Promising Chain (vs. then - a_/e_)

**fetch (link or route)** [1^]
fetch (_)                                               /*something fetched*/
    .then((res)=>res.json())                            /*"res" was fetched*/
    .then((data)=>setData(data))                        /*process data from res.json*/
    .catch((error)=>console.error(error))               /*in case of error, display - 3rd error could be "_"; LAST line*/

***see EXAMPLE***

Every JS file has JS as top (see blue highlight in pic)

**File order**
                JS

                    Import

                    JSX code                             /*JS above RETURN*/
                    return{                             /*Line 19 in picture*/
                        
                        HTML variations
                    }

                    export                             /*JS below last curly of  RETURN*/

**const and e**
                const handleChange = (e) => {           /*Line ## in picture - "e.target.value" to access input*/
                    code or function
                }

**EXAMPLE** - Alonso's TV
import...                                               /*See pictures*/

