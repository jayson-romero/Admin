import * as React from "react"
import { userRows } from "../../dummyData"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import DeleteIcon from "@mui/icons-material/Delete"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function UserList() {
	const [data, setData] = useState(userRows)

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id))
	}

	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 100 },
		{
			field: "username",
			headerName: "Username",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="flex items-center gap-5">
						<img
							src={params.row.avatar}
							alt=""
							className="w-8 h-8 rounded-full"
						/>
						{params.row.username}
					</div>
				)
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 200,
		},
		{
			field: "transaction",
			headerName: "Transaction Volume",
			width: 200,
		},
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row.id}>
							<button className="bg-green p-2 rounded w-18 text-white">
								Edit
							</button>
						</Link>
						<DeleteIcon
							className="text-red ml-5 cursor-pointer"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				)
			},
		},
	]

	return (
		<div className="m-[20px] p-[20px]">
			<div style={{ height: "100%", width: "100%" }} className="bg-white">
				<DataGrid
					rows={data}
					disableRowSelectionOnClick
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 10 },
						},
					}}
					checkboxSelection
				/>
			</div>
		</div>
	)
}
