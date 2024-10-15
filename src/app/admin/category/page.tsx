"use client";

import { addCategory, removeCategory } from "@/app/lib/features/adminSlice/adminSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
    const [category, setCategory] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const dispatch = useAppDispatch();
    const sliceCategory = useAppSelector((state) => state.admin.category) as [];

    useEffect(() => {
        setCategory(sliceCategory);
        
    }, [sliceCategory]);

    const handleAddCategory = async(e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            let response = await axios.post('/api/admin/category', newCategory);
            if (response.data.success) {
                dispatch(addCategory(newCategory));
                setNewCategory('');
            } else {
                toast.error("Cannot add the category at the moment ");
            }

        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
  return (
    <div className="flex flex-col gap-8 container mx-auto items-center pt-20 h-screen">
      <form onSubmit={handleAddCategory} className="border rounded-md flex flex-col gap-5 p-4 w-1/3">
        <Input placeholder="category" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)} />
        <Button>Add Category</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sl</TableHead>
            <TableHead>Category</TableHead>
            <TableCell>Actions</TableCell>
          </TableRow>
              </TableHeader>
              {category.map((ele,index) => (
                  <TableBody>
                  <TableRow>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{ele}</TableCell>
                    <TableCell>
                      <Button onClick={()=>dispatch(removeCategory(ele))}>Remove</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
        
      </Table>
    </div>
  );
}
