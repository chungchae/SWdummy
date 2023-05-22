import { CommonHeader } from 'components/CommonHeader'
import { ManageCard } from 'components/ManageCard'
import manageProjectListSampleJson from 'constants/json/manage_project_list_sample.json'
import expireProjectListSampleJson from 'constants/json/expire_project_list_sample.json'
import { FC } from 'react'
import { ManageProjectListType, ExpireProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { 
  Container, 
  Root,
  ManageCardContainer,
  ManageContainer,
  ManageTitleTypo,
  ExpireCardContainer,
  ExpireContainer,
  ExpireTitleTypo
 } from './styled'

type UserProjectManagePageProps = {
  className?: string
}

export const UserProjectManagePage: FC<UserProjectManagePageProps> = ({ className }) => {
  const manageProjectListData = camelizeKey(manageProjectListSampleJson.project_list) as ManageProjectListType
  const expireProjectListData = camelizeKey(expireProjectListSampleJson.project_list) as ExpireProjectListType
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
      <ManageContainer>
          <ManageTitleTypo>진행중인 프로젝트</ManageTitleTypo>
          <ManageCardContainer>
            {manageProjectListData.map((projectItem) => (
              <ManageCard
                projectItem={projectItem}
                key={`project_card_${projectItem.key}`}
              />
            ))}
          </ManageCardContainer>
        </ManageContainer>
        <ExpireContainer>
          <ExpireTitleTypo>마감된 프로젝트</ExpireTitleTypo>
          <ExpireCardContainer>
            {expireProjectListData.map((projectItem) => (
              <ManageCard
                projectItem={projectItem}
                key={`project_card_${projectItem.key}`}
              />
            ))}
          </ExpireCardContainer>
        </ExpireContainer>
      </Container>
    </Root>
  )
}
