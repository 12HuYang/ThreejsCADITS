/**
 * Created by yangh_000 on 1/17/2017.
 */

function check_complete() {
    if(oplog.length<4)
        return -1;
    return 1;
}

function check_win() {   //under 4 steps constrains, pre-test, train_1,2,3, post-test 1,2,3
    if(oplog.length!=4)
        return -1;
    var ophis=[];
    for(var i=0;i<csgobjs.length;i++){
       var obj=csgobjs[i];
       if(obj.name=="union"){
           if(ophis.indexOf(1)!=-1)
               ophis.push(2);
           else
               ophis.push(1);
       }
       if(obj.name=="common")
       {
           ophis.push(3);
       }
        if(obj.name=="subtract")
        {
            ophis.push(4);
        }
    }
    var cop=check_op();
    if(cop==-1)
        return -1;
    var rightop=[[1,2,4,3],[1,2,3,4],[3,1,2,4],[1,3,2,4]];
    var rcount=0;
    for(i=0;i<rightop.length;i++)
    {
        var top=rightop[i];
        for(j=0;j<4;j++)
        {
            if(ophis[j]==top[j])
                rcount++;
        }
        if(rcount==4){
            //alert("Congratulate !!");
            //steplog=steplog+opstep;
            //steplog=steplog+" success";
            if(stageI[0]==2||stageI[0]==3||stageI[0]==4)
            {
                var tutorwindow=parent.frames['tutor'].document.getElementById("tutorcontent");
                var valid=checkusedsq(ophis);
                if(valid==1)
                {
                    usedsq.push(ophis);
                    alert("Congratulate!!");
                    return 1;
                }else{
                    if(Number(stageI[0]==6))
                    {
                        alert("Operation sequence has been used. Try other sequence.");
                        return -1;
                    }
                    alert("Operation sequence has been used. Check Tutor Suggestion Window.");
                    var opsq=[];
                    for(var k=0;k<ophis.length;k++){
                        if(ophis[k]==1)
                            opsq=opsq+"union, ";
                        if(ophis[k]==2)
                            opsq=opsq+"union, ";
                        if(ophis[k]==3)
                            opsq=opsq+"intersect, ";
                        if(ophis[k]==4)
                            opsq=opsq+"subtract, ";
                    }
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Current operation order"+ " [ "+opsq+" ] "+"has been used before, try other orders.</p>";
                    return -1;
                }

            }
            alert("Congratulate!!");
            return 1;
        }
        rcount=0;
    }

    return -1;
}

function checkusedsq(ophis) {
    if(usedsq.length==0)
        return 1;
    var count=0;
    for(var i=0;i<usedsq.length;i++)
    {
        for(var j=0;j<ophis.length;j++)
        {
            if(ophis[j]==usedsq[i][j])
                count++;
        }
        if(count==ophis.length)
            return -1;
        count=0;
    }
    return 1;
}

function check_op() {   //under 4 steps constrains, pre-test, train_1,2,3, post-test 1,2,3
    var runion=["cyx","cyy","cyz","union"];
    var rsub=["union","common","excube","exsphere"];
    var rcom=["excube","exsphere","subtract"];
    if(oplog.length!=4)
        return -1;
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.name=="union")
        {
            var v1=runion.indexOf(obj.basename1);
            var v2=runion.indexOf(obj.basename2);
            if(v1==-1 || v2==-1)
                return -1;
            opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ] ";
        }
        if(obj.name=="subtract")
        {
            v1=rsub.indexOf(obj.basename1);
            v2=rsub.indexOf(obj.basename2);
            if(rsub[v2]!="union")
                return -1;
            if(v1==-1 || v2==-1)
                return -1;
            opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ]";

        }
        if(obj.name=="common")
        {
            v1=rcom.indexOf(obj.basename1);
            v2=rcom.indexOf(obj.basename2);
            if(v1==-1 || v2==-1)
                return -1;
            opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ]";
        }

    }

    return 1;
}

function findunioncsg(v2) {
    var runion=["cyx","cyy","cyz","union"];
    var exist=runion[v2];
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.name!=exist)
        {
            var fv=runion.indexOf(obj.name);
            if(fv!=-1)
                return fv;
        }
    }
    return -1;
}

function findsubcsg(v2) {
    var rsub=["union","common","excube","exsphere"];
    var exist=rsub[v2];
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.name!=exist)
        {
            var fv=rsub.indexOf(obj.name);
            if(fv!=-1)
                return fv;
        }
    }
    return -1;

}

function findcomcsg(v2) {
    var rcom=["excube","exsphere","subtract"];
    var exist=rcom[v2];
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.name!=exist)
        {
            var fv=rcom.indexOf(obj.name);
            if(fv!=-1)
                return fv;
        }
    }
    return -1;
}

function check_step() {
    var runion=["cyx","cyy","cyz","union"];
    var runion1=["cylinder_x","cylinder_y","cylinder_z","result from union"];
    var rsub=["union","common","excube","exsphere"];
    var rsub1=["result from union","result from intersect","cube","sphere"];
    var rcom=["excube","exsphere","subtract"];
    var rcom1=["cube","sphere","result from subtract"]
    var tutorwindow=parent.frames['tutor'].document.getElementById("tutorcontent");
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.name=="union")
        {
            var v1=runion.indexOf(obj.basename1);
            var v2=runion.indexOf(obj.basename2);
            if(v1==-1 && v2!=-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                var fv=findunioncsg(v2);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Union, GoBack and select the "+runion1[v2]+" and the "+runion1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Union, the "+runion1[v2]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1!=-1&&v2==-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                var fv=findunioncsg(v1);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Union, Goback and select the "+runion1[v1]+" and the "+runion1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Union, the "+runion1[v1]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1==-1&&v2==-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Union, Goback and try other geometries.</p>";
                return -1;
            }
            //opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ] ";
        }
        if(obj.name=="subtract")
        {
            v1=rsub.indexOf(obj.basename1);
            v2=rsub.indexOf(obj.basename2);
            if(rsub[v2]!="union")
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong second selection for Subtract, it should be a union of geometries.</p>";
                return -1;
            }
            if(v1==-1 && v2!=-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                var fv=findsubcsg(v2);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Subtract, Goback and select the "+rsub1[v2]+" and the "+rsub1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Subtract, the "+rsub1[v2]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1!=-1&&v2==-1)
            {
                var fv=findsubcsg(v1);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Subtract, Goback and select the "+rsub1[v1]+" and the "+rsub1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Subtract, the "+rsub1[v1]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1==-1&&v2==-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Subtract, Goback and try other geometries.</p>";
                return -1;
            }
            //opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ]";

        }
        if(obj.name=="common")
        {
            v1=rcom.indexOf(obj.basename1);
            v2=rcom.indexOf(obj.basename2);
            if(v1==-1 && v2!=-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                var fv=findcomcsg(v2);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Intersect, Goback and select the "+rcom1[v2]+" and the "+rcom1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Intersect, the "+rcom1[v2]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1!=-1&&v2==-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                var fv=findcomcsg(v1);
                if(fv!=-1)
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Intersect, Goback and select the "+rcom1[v1]+" and the "+rcom1[fv]+".</p>";
                else
                    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Intersect, the "+rcom1[v1]+" is a good selection, but currently there is no geometry could be the second selection.</p>";
                return -1;
            }
            if(v1==-1&&v2==-1)
            {
                alert("Incorrect operation. Check Tutor Suggestion Window.");
                tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Wrong geometry selection for Intersect, Goback and try other geometries.</p>";
                return -1;
            }
            //opstep=opstep+"[ "+obj.name+" "+obj.basename1+" "+obj.basename2+" ]";
        }

    }

    return 1;
}

function step_win() {
    var ophis=[];
    var scount=0;
    for(var i=0;i<csgobjs.length;i++){
        var obj=csgobjs[i];
        if(obj.name=="union"){
            if(ophis.indexOf(1)!=-1)
                ophis.push(2);
            else
                ophis.push(1);
            scount++;
        }
        if(obj.name=="common")
        {
            ophis.push(3);
            scount++;
        }
        if(obj.name=="subtract")
        {
            ophis.push(4);
            scount++;
        }
    }
    var cop=check_step();
    if(cop==-1)
        return -1;
    var rightop=[[1,2,4,3],[1,2,3,4],[3,1,2,4],[1,3,2,4]];
    var rcount=0;
    var maxcount=0;
    var maxi=0;
    for(i=0;i<rightop.length;i++)
    {
        var top=rightop[i];
        for(j=0;j<ophis.length;j++)
        {
            if(ophis[j]==top[j])
                rcount++;
        }
        if(rcount==scount){
            return 1;
        }
        if(maxcount<rcount)
        {
            maxcount=rcount;
            maxi=i;
        }
        rcount=0;
    }
    alert("Incorrect operation. Check Tutor Suggestion Window.");
    var tutorwindow=parent.frames['tutor'].document.getElementById("tutorcontent");
    var rop;
    if(rightop[maxi][maxcount]==1||rightop[maxi][maxcount]==2)
        rop="union";
    if(rightop[maxi][maxcount==3])
        rop="common";
    if(rightop[maxi][maxcount]==4)
        rop="subtract";
    tutorwindow.innerHTML=tutorwindow.innerHTML+"<p>Current Operation at incorrect step. GoBack and try "+rop+".</p>";
    return -1;
}