import React from 'react';
import { Table, Layout } from 'antd';
import './MyTable.css'
import { detailedData } from "../../GlobalEnvironment/contentRawData"

const data = Object.values(detailedData)

let filterData = []
data.map((item, i) => { filterData.push({ text: item.Organization, value: item.Organization }) })
const columns = [
    {
        title: 'Organization',
        dataIndex: 'Organization',
        key: 'Organization',
        width: "150px",
        minWidth: "150px",
        fixed: 'left',
        filters: filterData,
        onFilter: (value, record) => record.Organization.indexOf(value) === 0
    },
    {
        title: 'Operating Area',
        dataIndex: 'OperatingArea',
        key: 'OperatingArea',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'History',
        dataIndex: 'History',
        key: 'History',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Core Functions',
        dataIndex: 'CoreFunctions',
        key: 'CoreFunctions',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Credibility',
        dataIndex: 'Credibility',
        key: 'Credibility',
        width: "150px",
        minWidth: "150px",
    },

    {
        title: 'Programs',
        dataIndex: 'Programs',
        key: 'Programs',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Sustainability',
        dataIndex: 'Sustainability',
        key: 'Sustainability',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Cost Of Services',
        dataIndex: 'CostofServices',
        key: 'CostofServices',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Analysis',
        dataIndex: 'Analysis',
        key: 'Analysis',
        width: "150px",
        minWidth: "150px",
    },
    {
        title: 'Reference Link Website',
        dataIndex: 'ReferencelinkWebsite',
        key: 'CostofSReferencelinkWebsiteervices',
        width: "150px",
    }
];



const MyTable = () => (
    <>
    <style>{
    `
    .ant-table-header table{
        visibility: visible !important;
    }
    .ant-table-thead tr th{
         width:150px !important;
    }
    `
    }</style>

        <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{ x: "20%", y: 640 }}
        />
        </>
)
export default MyTable