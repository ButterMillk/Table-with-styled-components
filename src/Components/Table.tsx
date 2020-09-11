import styled from 'styled-components';
import * as React from 'react'; 
import { ColumnDescription, ICell, TableProps, TableState, ISingleRow } from '../Model/Model';
import { screenSmallerThan } from '../Utils/MediaQuerry';


const StyledTable = styled.div`
    width: 90%;
    margin: 20px auto 0 auto;
    padding: 10px 0;
`;

const SingleRow = styled.div<ISingleRow>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    border-bottom: 1px solid black;
    background-color: ${props => props.header ? "gray" : "white"}
`;

const Cell = styled.div<ICell>`
    width: ${props => props.width}px;
    ${screenSmallerThan.desktop`
        display: ${(props: any) => {return props.hideOnDesktop && "none"}};
    `};
    ${screenSmallerThan.tablet`
        display: ${ (props: any) => {return props.hideOnTablet && "none"}};
    `};
    ${screenSmallerThan.phone`
        display: ${ (props: any) => {return props.hideOnPhone && "none"}};
    `};
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    cursor: ${props => props.pointer ? "pointer" : "default"}

`;

class Table extends React.Component<TableProps, TableState>{

    state = {
        data: this.props.data || undefined
    }


    public sortColumn = (key: any) => {

        const newArray = [...this.state.data];

        newArray.sort((a: any, b: any) => {
            const aRow = (typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]);
            const bRow = (typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]);

            if(aRow > bRow){
                return 1;
            } else{
                return -1;
            }
        })
        
        this.setState({
            data: newArray
        })
    }
    
    public render(){
        return(
            <StyledTable>
                <SingleRow header>
                    {this.props.columnConfiguration.map((element: ColumnDescription, index: number) => {
                        return(
                            <Cell 
                                key={index}
                                width={element.width} 
                                onClick={() => this.sortColumn(element.id)}  
                                pointer
                                hideOnDesktop={element.hideOnDesktop}
                                hideOnTablet={element.hideOnTablet}
                                hideOnPhone={element.hideOnPhone}
                            >
                                {element.name}
                            </Cell>
                        );
                    })}
                </SingleRow>
                {this.state.data.map((element: any) => {
                    return(
                    <SingleRow key={element.id}>
                        {Object.keys(element).map((key: any, index: number) => {
                            return(
                            <Cell 
                                width={this.props.columnConfiguration[index].width} 
                                key={key}
                                hideOnDesktop={this.props.columnConfiguration[index].hideOnDesktop}
                                hideOnTablet={this.props.columnConfiguration[index].hideOnTablet}
                                hideOnPhone={this.props.columnConfiguration[index].hideOnPhone}
                            >
                                <span>{element[key]}</span>
                            </Cell>
                            );
                        })}
                    </SingleRow>
                    );
                })}

            </StyledTable>
        );
    }
}

export default Table;